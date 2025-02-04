# Docker

Docker is a virtualization tool, that makes developing and deploying application much easier. 

Docker rund on the OS Application layer and uses the OS kernel.

## Installation

To install Docker, follow these steps:

1. Download Docker from the [official website](https://www.docker.com/get-started).
2. Follow the installation instructions for your operating system.
3. Verify the installation by running:


## Docker CLI Commands

#### Check Docker version
   ```sh
   docker --version
   ```

#### Pull an image
   ```sh
   docker pull <image-name>
   ```

#### Run a container
   ```sh
   docker run -d -p 80:80 <image-name>
   ```
#### List running containers
   ```sh
   docker ps
   ```

#### Stop a container
   ```sh
   docker stop <container-id | container-name>

   ```
   

#### Remove a container
   ```sh
   docker rm <container-id | container-name>

   ```
   

#### build an image
   ```sh
   docker build -t <tag-name:version>

   ```
   
## Dockerfile
A Dockerfile is a script that contains a set of instructions for building a Docker image. Here is a simple example:
```sh
# tells Docker to use the Node.js 14 version based on Alpine Linux as the base image for your container.
FROM node:14-alpine

WORKDIR /app
# copy file and directory to /app in docker container env
COPY package.json /app/
COPY src /app/
# change directory
WORKDIR /app

RUN npm install

CMD ["node", "server.js"]
```
   



