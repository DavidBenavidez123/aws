const app = require('./server/server')
const port = process.env.PORT || 8080;


const socket = require('socket.io')

const server = app.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

require('./routes/sockets')(io);

module.exports = { app, io };