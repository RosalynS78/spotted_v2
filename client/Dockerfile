ARG NODE_VERSION=22.2.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

WORKDIR /client/src/app.js

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev

RUN npm install -g nodemon

COPY . .

RUN  chown -R node /usr/src/app
USER node

EXPOSE 4000

CMD npm run dev