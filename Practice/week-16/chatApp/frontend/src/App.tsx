import { useEffect, useRef, useState } from 'react'
import './App.css'
import { SendIcons } from './icons/SendIcons'
import { BACKENDURL } from './url/BACKENDURL'

function App() {
  const [messages, setMessages] = useState([
    { text: "hi there", fromMe: false },
    { text: "hello", fromMe: true },
  ])
  const [inputMessage, setInputMessage] = useState("");
  const wsRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    const ws = new WebSocket(BACKENDURL)
    wsRef.current = ws

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: { roomId: "red" }
      }))
    }

    ws.onmessage = (event) => {
      const received = event.data
      setMessages(prev => [...prev, { text: received, fromMe: false }])
    }

    return () => ws.close()
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function sendMessage() {
    if (!inputMessage.trim()) return;

    wsRef.current.send(JSON.stringify({
      type: "chat",
      payload: { message: inputMessage }
    }));

    setMessages(prev => [...prev, { text: inputMessage, fromMe: true }])
    setInputMessage(""); // Clear input
  }

  return (
    <div className='w-screen h-screen bg-black flex flex-col justify-between items-center p-4'>
      <div className='flex-1 w-full max-w-lg overflow-y-scroll px-2' style={{ maxHeight: '80vh' }}>
        {messages.map((msg, i) => (
          <div key={i} className={`m-2 flex ${msg.fromMe ? 'justify-end' : 'justify-start'}`}>
            <span className='bg-white text-black rounded p-2 max-w-[70%] break-words'>{msg.text}</span>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      <div className='flex items-center gap-2 mt-2 w-full max-w-lg'>
        <input
          className='bg-white text-black text-xl rounded-lg p-2 flex-grow'
          type="text"
          placeholder='Message...'
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className='text-black bg-white p-2 rounded-lg'
          onClick={sendMessage}
        >
          <SendIcons />
        </button>
      </div>
    </div>
  )
}

export default App
