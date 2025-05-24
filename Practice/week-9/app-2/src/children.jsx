function App() {
return <div style={{display:"flex",backgroundColor:"gray"}}>
    <Card>
      <div style={{color:"green"}}>
        Enter your name: <br/> <br />
        <input type='text' /> 
      </div> 
    </Card>

    <Card> 
      <div> Hi there</div>
    </Card>
  </div>
}

function Card({children}){
  return <div style={{backgroundColor:"white" ,borderRadius:10,color:"black",padding:10,margin:10}}> 
  Up
  {children}
  lower
  {children}
  </div>
} 

// export default App
