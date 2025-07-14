import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef()

  function sendMessage() {
    if (!socket) {
      return
    }
    const message = inputRef.current.value
    // @ts-ignore
    socket.send(message)
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000/")
    setSocket(ws)

    ws.onmessage = (event) => {
      alert(event.data)
    }
  },[])

  return (
    <>
      <div>
        <input ref={inputRef} style={{ margin: 25, padding: 10 }} type="text" placeholder='message' />
        <button onClick={sendMessage}>sennd</button>
      </div>
    </>
  )
}

export default App
