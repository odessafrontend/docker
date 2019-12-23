FROM node:12-alpine

LABEL example_for="OdessaFrontend"

ENV NODE_ENV=DEV
ENV PORT=3001

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY ./dist .

EXPOSE 3001
CMD [ "node", "main.js" ]