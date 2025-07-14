import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:65534})

wss.on("connection" , (socket) => {
    console.log("Server connected")

    setInterval(() => {
        socket.send(`Price of MRF ${Math.random()}`)
    }, 500);

    socket.on("message" , (e) => {
        console.log(e.toString())

        if(e.toString() === "ping"){
            socket.send("pong")
        }
    })
})

