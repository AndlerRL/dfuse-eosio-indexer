FROM node:16 as builder
WORKDIR /usr/src/app
COPY package.json .
COPY yarn*.lock .
RUN yarn --ignore-optional --frozen-lockfile install
COPY . .
# RUN yarn prisma generate
# RUN yarn gen
RUN yarn build
CMD [ "node", "dist/" ]
