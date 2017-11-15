FROM node:alpine


MAINTAINER David Rodriguez

# Install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
ENV PATH /root/.yarn/bin:$PATH
RUN yarn global add @angular/cli

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

COPY . /usr/src/app

ENTRYPOINT ["ng", "serve"]
