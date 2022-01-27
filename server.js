const httpServer = require("http").createServer();
const io = require("soclet.io")(httpServer, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    socket.on("chat", (args) => {
        socket.broadcasr.emit("chat", args);
    });
});