FROM node:alpine

# Install app dependencies
COPY ./nodered/package.json /src/package.json
RUN cd /src; npm install --no-optional

RUN mkdir -p /src/nodered
COPY ./nodered/flows.json /src/nodered/flows.json

# Bundle app source
COPY ./nodered/settings.js /src/nodered/settings.js

EXPOSE 3000
CMD cd /src; npm start
