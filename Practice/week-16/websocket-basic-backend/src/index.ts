import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 5000 });

wss.on("connection", (scocket) => {
  console.log("User connected");
  scocket.on("message", (e) => {
    if (e.toString() === "ping") {
      scocket.send("pong");
    }
  });
});
