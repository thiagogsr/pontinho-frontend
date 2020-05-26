FROM node:13.14.0-alpine as build

WORKDIR /pontinho

COPY .env-production package.json yarn.lock server.js ./
COPY public public
COPY src src

RUN yarn install
RUN yarn build:production

ENTRYPOINT node server.js
