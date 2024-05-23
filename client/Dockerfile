# docker compose example
# Stage 1
FROM node: as build-stage

WORKDIR 
COPY package.json .
RUN npm install
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

RUN npm run build

# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=
EXPOSE 

CMD nginx -g 'daemon off;'









# ARG NODE_VERSION=22.2.0

# FROM node:${NODE_VERSION}-alpine

# ENV NODE_ENV production

# WORKDIR /client/src/app.js

# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci --include=dev

# RUN npm install -g nodemon

# COPY . .

# RUN  chown -R node /usr/src/app
# USER node

# EXPOSE 4000

# CMD npm run dev