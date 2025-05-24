import React, { useState, useEffect } from 'react';

function App(){
    // fragments means <> </>
    return (
        <>
      <div>  <Card1/>  <Card2/> </div>
      <div>  <Card1/>  <Card2/> </div>
      </> 
       )      
}

function Card1(){
    return <div style={{backgroundColor:"aqua",borderRadius:20,padding:10,margin:10}}>Hi there! Whatsapp is using me </div>
}

function Card2(){
    return <div style={{backgroundColor:"aqua",borderRadius:20,padding:10,margin:10}}>Hi there! I am is using Whatsapp </div>
}





export default App;