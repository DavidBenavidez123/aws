module.exports = function (io) {

    io.on('connection', function (socket) {
        
        console.log('connected')
        socket.emit('connection', 'connected to server socket');

        

        socket.on("disconnect", () => {
          
        });

    })
};

