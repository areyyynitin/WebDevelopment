import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj ={
    name:"Prajapat",
    age:21
  }

  return (
   <>
   <h1 className='bg-green-900 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>
   <Card username="Nitin" reelId="1" price="1200" imgsrc="https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=600" />
   <Card username="Aman" reelId="2" price="12000" imgsrc="https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=600"/>
   <Card username="Rishi" reelId="3" imgsrc="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
   <Card username="Himanshu" reelId="4" price="1200000" imgsrc="https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=600" />
   


  
   </>
  )
}

export default App
