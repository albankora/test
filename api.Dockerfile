FROM node:18.12.0-bullseye-slim as api-dev
ENV NODE_ENV development
WORKDIR /usr/app
COPY ["package.json", "yarn.lock", "tsconfig.json", ".eslintrc", ".eslintignore", "jest.config.js", "./"]
COPY ./src ./src
COPY ./tests ./tests
RUN yarn
CMD ["yarn", "dev"]
