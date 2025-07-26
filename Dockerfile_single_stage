# use node.js base image
FROM node:18-alpine

# Working Directory
WORKDIR /app

# copy package.json and lockfile
COPY package*.json ./

# install depencies
RUN npm install

# Copy code
COPY . .

# Build vite app

RUN npm run build

# Install serve to serve the static build
RUN npm install -g serve

#expose port the app will run
EXPOSE 3000

# run the production using server
CMD ["serve", "-s", "dist", "-l", "3000"]
