FROM node

RUN apt-get update
RUN apt-get install -y git
RUN git clone https://github.com/ishmandoo/dog_store.git
RUN cd dog_store && npm install

CMD ["nodejs", "dog_store/server/server.js"]
