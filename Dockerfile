FROM node:alpine
LABEL author="Ankur Goel"

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --check-files

COPY . ./
EXPOSE 8080
ENTRYPOINT ["yarn", "serve"]
