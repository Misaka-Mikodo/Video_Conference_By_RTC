const { io } = require("socket.io-client");

const socket = io("http://localhost:3000/");

// client-side
socket.emit("hello", 6);

socket.on("hello", ()=>{
  console.log("client recv hello")
})

socket.on("boardcast", ()=>{
  console.log("client recv boardcast")
})