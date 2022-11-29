const express = require("express");
const path = require("path");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('new connection');
    socket.on('disconnect', () => {
        console.log('socket disconnected');
    })

    socket.on('new message', msg => {
        console.log('new message on the server', msg);
        io.emit('incoming', msg);
    })
})

server.listen(3000, () => {
    console.log('Starting server');
});
