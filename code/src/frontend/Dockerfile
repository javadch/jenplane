# Building the application
FROM node:lts-buster as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
# Increate node max memory, the default memory limit is too low for building 
ENV NODE_OPTIONS --max-old-space-size=8192 

COPY package.json package-lock.json ./

# NOTE: opencollective is not required but leads to warnings if missing
RUN npm install react-scripts@5.0.1 opencollective -g

# install the dependencies
RUN npm install

COPY . ./

# Include default values; override in deployment image
#RUN cp default.env .env

# Build
RUN npm run build

# Serve the built application with nginx
FROM nginx:stable-alpine

RUN apk add --no-cache nodejs npm bash

SHELL ["/bin/bash", "-c"]

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
