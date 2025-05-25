import { useState } from 'react'
import {BrowserRouter ,Routes,Route,Link,useNavigate,Outlet} from "react-router-dom"
import './App.css'

function App() {
 

  return (
    <>
    <div>
      
      <BrowserRouter>
      
        <Routes >
          <Route path='/' element={<Layout/>}>

          <Route path="/neet/class-11" element={<Class11Program/>} />
          <Route path="/neet/class-12" element={<Class12Program/>} />
          <Route path="/" element={<Landing/>} />
          <Route path="*" element={<ErrorPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

function Layout(){
  return <div style={{height:"100vh", backgroundColor:"blue"}}>
    <Link to="/">HOME</Link>
    |
    <Link to="/neet/class-11">Class 11</Link> 
    |
    <Link to="/neet/class-12">Class 12</Link> 

    <div style={{height:"90vh" , backgroundColor:"aquamarine"}}>
      <Outlet/>
    </div>

   footer
  </div>
}

function ErrorPage(){
  return ( <>
  <div>Wrong request</div>
  </>)
}

function Class11Program(){
  return (
    <>
      <div>
        NEET PROGRAMS for 11th
      </div>
    </>
  )
}

function Class12Program(){
  const navigate = useNavigate()

  function redirecttUser(){
    navigate("/")
  }




  return (
    <>
      <div>
        NEET PROGRAMS for 12th
        <button onClick={redirecttUser}>Redirect to Home page</button>
      </div>
    </>
  )
}

function Landing(){
  return (
    <>
      <div>
        Welcome everyone
      </div>
    </>
  )
}



export default App
