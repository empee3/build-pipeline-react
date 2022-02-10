# Base our new image on node v16
FROM node:16

RUN mkdir /app

# Add working directory
WORKDIR /app

# Before we can run npm install, we need to get our package.json and package-lock.json files into our images
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available
COPY package*.json /app

# Execute npm install
RUN npm install

RUN npm rebuild node-sass

# Add source code into our image
COPY . /app

EXPOSE 3000

# Command to run when image is run inside container
CMD ["npm", "start"]