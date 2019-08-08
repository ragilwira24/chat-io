import express = require('express');
import {LogUtil} from "./app/logger/logger.util";
import {connectToChat} from "./app/controller/chat/chat.controller";

const http = require('http'),
    app: express.Application = express(),
    log = LogUtil('app'),
    server = http.createServer(app),
    port: number = 3000;

app.get('/', (req, res) => {
    res.send('Chat Server is running on port 3000')
});

connectToChat(server);

server.listen(port,() =>{
    log.info(`Chat Server is running on port: ${port}`);
});
