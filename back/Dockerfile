FROM node:18

WORKDIR /dist

COPY .env ./

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY package.json ./
RUN npm install

COPY dist ./dist
COPY . .
EXPOSE 2000
CMD ["./wait-for-it.sh", "postgres:5432", "--", "node", "dist/index.js"]