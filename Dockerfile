#Stage 1
# use node.js base image
FROM node:24-alpine AS builder

# Working Directory
WORKDIR /app

# copy package.json and lockfile
COPY package*.json ./

# install depencies
RUN npm install

# Copy code
COPY . .

# Build app

RUN npm run build

# Stage 2 
#nginx for deploying
FROM Nginx:alpine 

#remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

#Copy build output to nginx folder
COPY --from builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
