import {LogUtil} from "../../logger/logger.util";
import {ChatContentModel} from "../../model/chat.content.model";
import {Server} from "socket.io";
let log = LogUtil('chat.controller');

export function connectToChat(server: any) {
    const io = require('socket.io')(server)

    io.on('connection', (socket: any) => {
        log.info("User is Connected");

        /* Join a chat */
        socket.on('join', function (username: any) {
            const joinChat: string = `${username} has joined the chat`;
            log.info(joinChat);
            socket.broadcast.emit('masuk', joinChat);
        });

        /* Send a Message */
        socket.on('kirim', (sender: any, messageContent: any) => {
            let message = new ChatContentModel(sender, messageContent);
            io.emit('message', message);
        });

        /* Disconnect from chat */
        socket.on('disconnect', function (username: any) {
            log.info(  `${username} has left`);
            socket.broadcast.emit("keluar", "user has left");
        });
    });
}



