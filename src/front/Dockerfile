FROM node:18.16

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

# Preview, not production (port 4173)
CMD yarn preview --port 4173