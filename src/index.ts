import { Server } from 'mongodb-core';


const server = new Server({
    host: 'localhost',
    port: 27017
});

server.on('connect', (_server: any) => {
    console.log("Connected");
    console.log(_server);

})

server.connect();