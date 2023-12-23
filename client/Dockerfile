FROM node:21.5

RUN [ "mkdir", "-p", "/usr/src/app" ]

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

COPY yarn.lock /usr/src/app/yarn.lock

RUN [ "yarn", "install" ]

COPY . /usr/src/app

CMD [ "yarn", "run", "dev", "--host" ]
