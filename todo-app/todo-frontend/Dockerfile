# Front End Build
FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=http://localhost:3000

# Testing the Todo Component
RUN npm test

# If all is OK, build the Front End
RUN npm run build

# Serving Dist files
FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html