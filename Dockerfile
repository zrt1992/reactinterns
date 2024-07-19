FROM node:20.13.1
WORKDIR /app/user/cake

COPY package*.json ./
VOLUME .:/app/user/cake
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
