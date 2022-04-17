# pull the official base image
FROM node:16.14.2
LABEL "Author"="Prakhar Pant"
LABEL "Project"="Scientific Calculator"
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# start app
CMD ["npm", "start"]