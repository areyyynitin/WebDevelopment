import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App(){
  return( 
  <div style={{background:"#dfe6e9",height:"100vh"}}>
     <ToggleMessage />
     <br />
     <ToggleMessage />
     <br />
     <ToggleMessage />
  </div>
  )
  }

const ToggleMessage = ()=> {
  let [notificationCount,SetnotificationCount] = useState(0)

  function toggle(){
   SetnotificationCount(notificationCount= notificationCount+1)
   
  }

  return <div> 
    <button onClick={toggle}>Notification</button>
    {
      notificationCount 
    }
  </div>
}



const style ={width:200 , backgroundColor:"white",borderRadius:10,borderColor:"gray",borderWidth:1 ,padding:20}

// function PostComponent ({name,subtitle,time,image,description}) {
//   return <div style={style}>
//   <div style={{display:"flex"}}>
//     <img src={image }
//     style={{
//       width:40,
//       height:40,
//       borderRadius:200
//     }}/>

//   <div style={{fontSize:10 ,marginLeft:10}}><b>{name}</b>
//   <div>{subtitle} </div>
//           {time !== undefined ?  <div style={{display:"flex"}}>
//                   <div>{time}</div>
//                   <img src='https://media.istockphoto.com/id/1031786258/vector/watch.jpg?s=612x612&w=0&k=20&c=U_7Euy34YQwrg2zgJw_VutYLUjDHYyKUr483e-w29RE=' style={{width:10,height:10}}l />
//              </div> : null}
//   </div>
 
//    </div >
//     <div style={{fontSize:12}}>{description}</div>
//    </div>

// }

function BioComponent () {
  return <div>
    <div style={{width:200,backgroundColor:"white",padding:20,borderWidth:1,borderRadius:10}}>

    <div >
      <img src='https://media.licdn.com/dms/image/v2/D4D03AQG2NuAOy7jqdQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1708791116299?e=1753315200&v=beta&t=54_AXr8BSR1qsv24_Tr4CxlHRC58LfTBxq1k_kHx6c8'
      style={{height:40,width:40,borderRadius:200 }}
      />
     </div>

      <div style={{fontSize:10}}>
        <div><b>Nitin Prajapat</b></div>
        <div>BCA Student </div>
        <div style={{paddingBottom:10}}>Mumbai,Maharashtra </div>
      </div>


      <div style={{display:"flex"}}>
        <img src="https://media.licdn.com/dms/image/v2/D4D0BAQGVCv2OJ2mVIA/company-logo_100_100/company-logo_100_100/0/1718267813789/tilak_maharashtra_vidyapeeth_logo?e=1753315200&v=beta&t=NvYFaHdPTcveJM4r45Kk_u157jJHjck7bi9S0JPptO0" alt="LT" style={{borderRadius:200,height:20,}} />
        <div style={{fontSize:10,paddingLeft:5,paddingTop:4}}>Tilak Maharashtra Vidyapeeth, Pune</div>
      </div>

    </div>
  </div>
  
}

// function App() {
//   return (
//     <div style={{backgroundColor:"#dfe6e9",height:"200vh"}}>
//       <div style={{display:"flex",justifyContent:"center"}}>
//     <div>
//       <div>
//         <br/>
//         <PostComponent 
//             image ={ "https://t3.ftcdn.net/jpg/13/05/21/34/240_F_1305213469_KY3qx23jZ6BeHS3CVxazrZsfoXczdLeb.jpg"}
//             name = {"100x devs"}
//             subtitle = {"23000 followers"}
//             time = {5}
//             description ={"I got job  in Vishal Mega Mart "}
//         />
//         <br/>
//       </div>
//        <div>
//         <PostComponent 
//          image ={ "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740"}
//             name = {"Nitin Prajapat"}
//             subtitle = {"Promoted AD"}
          
//             description ={ "Want to know how to acieve more in less time"}
//         />
//         <br/>
//       </div>
   
//       {/* <PostComponent /> */}
//       <div>
//         <br/>
//         <BioComponent />

//       </div>
//       <div>
//         <br/>
//         <BioComponent />

//       </div>
//       <div>
//         <br/>
//         <BioComponent/>

//       </div>
//       </div>

//       </div>
     
     
//     </div>
//   )
// }
export default App
