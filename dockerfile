FROM node:22

WORKDIR /usr/src/app

COPY . .

RUN npm install --legacy-peer-deps

RUN npm install --unsafe-perm -g @angular/cli

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
