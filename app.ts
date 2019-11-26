import express = require('express');
import {LogUtil} from "./app/logger/logger.util";
import {connectToChat} from "./app/controller/chat/chat.controller";
import {bodyParserConfiguration} from "./app/configuration/body-parser.config";


const http = require('http'),
    app: express.Application = express(),
    log = LogUtil('app.ts'),
    server = http.createServer(app),
    port: number = 3000;

bodyParserConfiguration(app);
connectToChat(server);

server.listen(port,() =>{
    log.info(`Chat Server is running on port: ${port}`);
});
