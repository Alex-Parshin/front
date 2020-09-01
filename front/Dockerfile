FROM node:latest
RUN apt-get update && apt-get upgrade -y
#RUN apt-get install -y sudo
RUN apt-get install -y gnupg
RUN apt-get install -y curl
RUN apt-get install -y gconf-service libx11-xcb1
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN npm install express
WORKDIR /src/front
RUN npm i
EXPOSE 8080
#CMD ["npm", "test:dev"]


