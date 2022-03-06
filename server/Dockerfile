#  Dockerfile for Node Express Backend

FROM node:14.16-alpine

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV development

# Copy app source code
COPY . .

RUN npm install 

CMD ["npm","start"]

EXPOSE 3000
