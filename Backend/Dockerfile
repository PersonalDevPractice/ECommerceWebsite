FROM node:10

USER root
WORKDIR /root
COPY . ./

RUN npm install typescript -g
RUN npm install ts-node -g
RUN npm install

EXPOSE 8080

CMD ["ts-node", "index.ts"]
