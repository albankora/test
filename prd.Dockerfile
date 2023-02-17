FROM node:18.12.0-bullseye-slim AS build
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
USER node
WORKDIR /usr/src/app
COPY --chown=node:node . .
COPY ["package.json", "yarn.lock", "tsconfig.json", ".env", "./"]
COPY ./src ./src
COPY --chown=node:node . /usr/src/app
RUN yarn install
RUN yarn build
RUN yarn install --production

FROM node:18.12.0-bullseye-slim  AS api-prd
ENV NODE_ENV production
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node --from=build /usr/src/app/dist /usr/src/app/dist
CMD ["dumb-init", "node", "./dist/App.js"]
