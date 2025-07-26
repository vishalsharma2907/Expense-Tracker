<<<<<<< HEAD
# use node.js base image
FROM node:18-alpine
=======
#Stage 1
# use node.js base image
FROM node:24-alpine AS builder
>>>>>>> a19ed08 (intial commit)

# Working Directory
WORKDIR /app

# copy package.json and lockfile
COPY package*.json ./

# install depencies
RUN npm install

# Copy code
COPY . .

<<<<<<< HEAD
# Build vite app

RUN npm run build

# Install serve to serve the static build
RUN npm install -g serve

#expose port the app will run
EXPOSE 3000

# run the production using server
CMD ["serve", "-s", "dist", "-l", "3000"]
=======
# Build app

RUN npm run build

# Stage 2 
#nginx for deploying
FROM nginx:alpine 

#remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

#Copy build output to nginx folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

>>>>>>> a19ed08 (intial commit)
