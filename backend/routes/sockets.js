module.exports = function (io) {

    io.on('connection', function (socket) {
        
        console.log('connected')
        socket.emit('connection', socket.id);

        

        socket.on("disconnect", () => {
          
        });

    })
};

