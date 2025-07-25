# ใช้ official NestJS image (หรือ Node image)
FROM node:18

# set workdir
WORKDIR /app

# copy package.json และ package-lock.json (หรือ yarn.lock)
COPY package*.json ./

# install deps
RUN npm install

# copy source code ทั้งหมด
COPY . .

# build (ถ้าใช้ ts)
RUN npm run build

# expose port (optional)
EXPOSE 3000

# start
CMD ["npm", "run", "start:dev"]


# nest:
#   image: node:18
#   working_dir: /app
#   volumes:
#     - ./:/app
#   ports:
#     - '3000:3000'
#   env_file:
#     - .env
#   command: npm run start:dev
#   depends_on:
#     - mongo
