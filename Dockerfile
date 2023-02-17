FROM postgres:14 as motorway-test-backend
WORKDIR /app
COPY ./scripts/init.sh /docker-entrypoint-initdb.d
COPY ./scripts/dump.sql ./scripts/motorway-test-backend/dump.sql

FROM node:18.12.0-bullseye-slim AS api-dev
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "tsconfig.json", ".env", "./"]
COPY ./src ./src
RUN yarn
CMD ["yarn", "dev"]

FROM node:18.12.0-bullseye-slim AS build
RUN RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
ENV NODE_ENV production
USER node
WORKDIR /usr/src/app
COPY --chown=node:node . .
COPY ["package.json", "yarn.lock", "tsconfig.json", ".env", "./"]
COPY ./src ./src
COPY --chown=node:node . /usr/src/app
RUN yarn install --production

FROM node:18.12.0-bullseye-slim  AS api-prd
ENV NODE_ENV production
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node --from=build /usr/src/app/dist/app.js /usr/src/app/dist/app.js
CMD ["dumb-init", "node", "./dist/App.js"]
