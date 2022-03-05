#  Dockerfile for Node Express Backend

FROM node:14.16-alpine

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV development

# Install Dependencies
COPY package*.json ./

RUN npm install 

# Copy app source code
COPY . .

CMD ["npm","start"]

EXPOSE 3000
