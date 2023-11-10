# FROM node:18-alpine

# Mention the working directory
# WORKDIR /app

# Copy all the package.json and package-lock.json into te container
# COPY package*.json .

# Install all the dependencies
# RUN npm i

# Copying the contents of the local directory into the /app directory in the container
# COPY . .

# Build the React app for production
# RUN npm run build

# Expose a port for the application to run on (you can change this if needed)
# EXPOSE 3000

# Start the react-app when container runs
# CMD ["npm", "start"]

#  docker build -t ecom-react-image .  //To create the image
# docker run --rm --name ecom-container -d -p 3000:3000 -v E:\Projects\Dev_Proj\Ecom_MernStack\dummy\Ecom\client:/app ecom-react-image


#=============================Tutorial point========================================

#Here we will use node as the base image.
FROM node:14-slim

#create a working directory inside the container.
WORKDIR /usr/src/app

#Environment variables.
# ENV PATH /app/node_modules/.bin:$PATH

#copy the files from the host to the container.
COPY package.json ./
COPY package-lock.json ./

#install npm and react versions.
RUN npm install --silent
# RUN npm install react-scripts@5.0.1 -g --silent   

#install nodemon to provide hot-reloading functionality.
# RUN npm install nodemon --save-dev
COPY . ./

EXPOSE 3000

#use nodemon to run the react application using npm.
CMD ["npm", "start"]