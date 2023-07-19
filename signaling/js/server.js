const {Server} = require("socket.io");

const io = new Server(3000)

io.on("connection", (socket) => {
  console.log("success in connection!")

  socket.on("hello", ()=>{
    console.log("server recv hello")
    socket.emit("hello")
  })
  io.emit("boardcast")
});
