FROM postgres:14 as motorway-test-backend
WORKDIR /app
COPY ./scripts/init.sh /docker-entrypoint-initdb.d
COPY ./scripts/dump.sql ./scripts/motorway-test-backend/dump.sql

FROM node:18.12.0-bullseye-slim AS api-dev
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "tsconfig.json", "./"]
COPY ./src ./src
RUN yarn
CMD ["yarn", "dev"]
