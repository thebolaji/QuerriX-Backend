FROM node:latest
WORKDIR /usr/src/app
ADD package*.json ./
RUN npm install -g npm@7.5.6
ADD . /usr/src/app
EXPOSE 3000
CMD ["npm","start"]
