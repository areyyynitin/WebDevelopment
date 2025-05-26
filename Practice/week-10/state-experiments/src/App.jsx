import { createContext, useContext, useState } from 'react'

const BulbContext = createContext();

function BulbProvider({children}){
  const [bulbOn,setBulbOn]=useState(true); // return [state variable , a function]
 return <BulbContext.Provider  value={{
  bulbOn:bulbOn,
  setBulbOn:setBulbOn
  }} >
  {children}
  </BulbContext.Provider>
}

function App() {
  return (
    <>
      <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
      </div>
    </>
  )
}

function Light(){
  return <div>
    <LightBulb/>
    <LightSwitch />
  </div>
}

function LightBulb(){
  const {bulbOn} = useContext(BulbContext)
  return <div> 
    {bulbOn ? <img style={{height:200,width:200}} src='https://cdn.pixabay.com/photo/2013/07/12/14/34/light-148483_1280.png'/> :
    <img style={{height:200,width:200}} src='https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg'  />}
  </div>
}

function LightSwitch(){
  const {bulbOn ,setBulbOn} = useContext(BulbContext)
  function toggle(){
    // setBulbOn(currentState => currentState = !currentState)   //inside setbulbon..argument is a function then it relate to bulbOn
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}>Toggle The bulb</button>
  </div>
}

export default App



// context api
// 1st create context for those data we want to transfer in another function
// 2nd wrappe you code in provider 
// before 
{/* <Light />  
after:
<BulbContext>
<Light />  
</BulbContext> */} 
// we havve to use provider to providing the value to all children
//  <Light/> in thit we have to provide a value ..so that children  can access it
//  <Light value={{
//   bulbOn:bulbOn,
//   setBulbOn:setBulbOonf
//  }} />

//3rd now just consume value
//  const {bulbOn} = useContext(BulbContext)