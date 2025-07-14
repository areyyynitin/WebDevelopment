
import './App.css'
import { BACKENDURL } from './url/BACKENDURL'

function App() {
  const url = BACKENDURL

  function sendMessage(){
    
  }


  return (
  <>
  <div >
     <input className='bg-black text-white text-xl p-2 rounded-lg mr-3' type="text" placeholder='Message...' />
     <button onClick={sendMessage} className='bg-black text-white p-2 text-xl rounded-lg '>Send</button>
  </div>
  
  </>
  )
}

export default App
