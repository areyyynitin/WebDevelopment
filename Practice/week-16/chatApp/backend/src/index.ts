import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 5050 });
interface User {
  socket:WebSocket,
  room:string
}
let allSocket: User[] = [];

wss.on("connection", (socket) => {
  socket.on("message" , (message) => {
    // @ts-ignore
    const parsedMessage = JSON.parse(message)

    if(parsedMessage.type === "join"){
      console.log("User joined room",parsedMessage.payload.roomId)
      allSocket.push({
        socket,
        room:parsedMessage.payload.roomId
      })
    }
    
    if(parsedMessage.type === "chat"){
      console.log("User wants to chat ")
      // const currentUserRoom = allSocket.find(x => x.socket != socket).room

      let currentUserRoom = null;
      for(let i=0 ; i< allSocket.length ;i++){
        if(allSocket[i].socket == socket){
          currentUserRoom = allSocket[i].room
        }
      }

      for(let i=0 ;i<allSocket.length ;i++){
       if(allSocket[i].room == currentUserRoom){
        allSocket[i].socket.send(parsedMessage.payload.message)
       }
      }


    }

  })
  
});


// Join a room
//  {
//     "type":"join",
//     "payload":{
//         "roomId":"greenRoom"
//     }
// }

// Chat within a room


