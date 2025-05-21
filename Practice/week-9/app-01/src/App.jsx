import { PostComponent } from './post'


function App() {
  function addPost(){

  }

  return (
    <div style={{backgroundColor:"#dfe6e9",height:"200vh"}}>
      <button onClick={addPost}>Add post</button>
      <div style={{display:"flex",justifyContent:"center"}}>
    
      <div>
        <br/>
        <PostComponent 
            image ={ "https://t3.ftcdn.net/jpg/13/05/21/34/240_F_1305213469_KY3qx23jZ6BeHS3CVxazrZsfoXczdLeb.jpg"}
            name = {"100x devs"}
            subtitle = {"23000 followers"}
            time = {5}
            description ={"I got job  in Vishal Mega Mart "}
        />
      </div>
    </div>
  </div>
  )
}














// function App(){
//   return( 
//   <div style={{background:"#dfe6e9",height:"100vh"}}>
//      <ToggleMessage />
//      <br />
//      <ToggleMessage />
//      <br />
//      <ToggleMessage />
//   </div>
//   )
//   }

// const ToggleMessage = ()=> {
//   let [notificationCount,SetnotificationCount] = useState(0)

//   function toggle(){
//    SetnotificationCount(notificationCount= notificationCount+1)
   
//   }

//   return <div> 
//     <button onClick={toggle}>Notification</button>
//     {
//       notificationCount 
//     }
//   </div>
// }



export default App
