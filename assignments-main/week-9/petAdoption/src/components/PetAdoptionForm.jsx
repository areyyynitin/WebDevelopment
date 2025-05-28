import { Button } from 'bootstrap'
import React from 'react'

const PetAdoptionForm = () => {
  return (
    <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
      <div style={{ height:600,width:"50%",backgroundColor:"burlywood",margin:20,padding:"20px 10px"}}>
    <PetName/>
       <PetType/>
       <Breed/>
       <Name/>
       <Email/>
       <PhoneNo/>
       
       <SubmitButton/>

      

    </div>

      </div>
   
  )
}

function PetName(){
 return <div>

  <div style={{display:'flex' ,paddingLeft:35}}>
           <h4 >Pet name</h4>
        </div>
     
      <div style={{display:'flex', justifyContent:"center",textAlign:"center" ,marginBottom:20}}>
      <input  style={{width:"90%" }} type="text" placeholder='Pet name' />
 </div>
  </div>
}

function PetType(){
  return <div>
    <div style={{display:'flex' ,paddingLeft:35}}>
      <h4>Pet Type</h4>
    </div>
     <div style={{display:'flex', justifyContent:"center",textAlign:"center" ,marginBottom:20}}>
      <input  style={{width:"90%" }} type="text" placeholder='Pet Type' />
 </div>
  </div>
}

function Breed(){
  return <div>
  <div style={{display:'flex' ,paddingLeft:35}}>
   <h4>Breed</h4>
  </div>
  <div style={{display:'flex', justifyContent:"center",textAlign:"center",marginBottom:20 }}>
    <input  style={{width:"90%" }} type="text" placeholder='Breed' />
  </div>
  </div>
}

function Name(){
  return <div>
  <div style={{display:'flex' ,paddingLeft:35}}>
    <h4>Your name</h4>
  </div>
   <div style={{display:'flex', justifyContent:"center",textAlign:"center",marginBottom:20 }}>
      <input  style={{width:"90%" }} type="text" placeholder='Mishra' />
   </div>
  </div>
  
}

function Email(){
  return <div>
    <div style={{display:'flex' ,paddingLeft:35}}>
    <h4> Email</h4>
  </div>
   <div style={{display:'flex', justifyContent:"center",textAlign:"center",marginBottom:20 }}>
      <input  style={{width:"90%" }} type="text" placeholder=' your@gmail.com' />
   </div>
  </div>
}

function PhoneNo(){
  return <div>
     <div style={{display:'flex' ,paddingLeft:35}}>
    <h4>Your Phone no.</h4>
  </div>
   <div style={{display:'flex', justifyContent:"center",textAlign:"center",marginBottom:20 }}>
      <input  style={{width:"90%" }} type="text" placeholder=' 123456789' />
   </div>
  </div>
}

function SubmitButton(){
  return <div style={{}} >
    
     <div style={{display:'flex', justifyContent:"center",textAlign:"center",marginBottom:20 }}>
     
      <button style={{width:"90%",cursor:"pointer" }}>Submit</button>
   </div>
    
  </div>
}
export default PetAdoptionForm