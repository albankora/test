FROM node:18.12.0-bullseye-slim AS build
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
USER node
WORKDIR /usr/app
COPY --chown=node:node . .
COPY ["package.json", "yarn.lock", "tsconfig.json", "./"]
COPY ./src ./src
COPY --chown=node:node . /usr/app
RUN yarn install
RUN yarn build
RUN yarn install --production

FROM node:18.12.0-bullseye-slim  AS api-prd
ENV NODE_ENV production
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
USER node
WORKDIR /usr/app
COPY --chown=node:node --from=build /usr/app/node_modules /usr/app/node_modules
COPY --chown=node:node --from=build /usr/app/dist /usr/app/dist
CMD ["dumb-init", "node", "./dist/src/App.js"]
