import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 5050 });
let userCount = 0;
let allSocket: WebSocket[] = [];

wss.on("connection", (socket) => {
  allSocket.push(socket);

  userCount += 1;
  console.log("user connected #", userCount);

  socket.on("message", (message) => {
    console.log(`Message received: ${message.toString()}`);
    for (let i = 0; i < allSocket.length; i++) {
      const s = allSocket[i];
      s.send(`${message.toString()} :sent from the server`);
    }
  });
});
