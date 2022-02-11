const http = require('http');
const {Server} = require('socket.io');
const {Message} = require('./models');
const app = require('./app');

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: 'http://127.0.0.1:3000',
    }
});

const CHAT_EVENTS = {
    NEW_MESSAGE: "NEW_MESSAGE",
    ERROR_NEW_MESSAGE: "ERROR_NEW_MESSAGE",
};


io.on('connect', socket => {
    socket.on(CHAT_EVENTS.NEW_MESSAGE, async (msg) => {
        const newMsg = JSON.parse(msg);
        try {
            const nerMsgInstance = await Message.create(newMsg);
            io.emit(CHAT_EVENTS.NEW_MESSAGE, JSON.stringify(nerMsgInstance));
        } catch (error) {
            socket.emit(CHAT_EVENTS.ERROR_NEW_MESSAGE, JSON.stringify(error));
        }
    });
});

httpServer.listen(3000, () => {
    console.log('Server is listening');
})