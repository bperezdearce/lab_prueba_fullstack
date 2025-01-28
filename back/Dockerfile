FROM node:18-alpine
WORKDIR /usr/src
COPY package*.json tsconfig.json ./
RUN npm ci
COPY . .
EXPOSE 2000
CMD ["npm", "run", "dev"]