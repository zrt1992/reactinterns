FROM node:18.17.0
WORKDIR /app/user/cake

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
