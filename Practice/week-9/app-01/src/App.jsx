import { useState } from 'react'
import { PostComponent } from './post'


function App() {
    const [posts,setPosts] = useState([]);

  

  const postComponents = posts.map(post => <PostComponent 
      name = {post.name}
      subtitle = {post.subtitle}
      time = {post.time}
      image ={post.image}
      description ={post.description}
  />)


  function addPost(){
    setPosts([...posts , {
       name : "100x devs",
      subtitle : "23000 followers",
      time : 5,
      image : "https://t3.ftcdn.net/jpg/13/05/21/34/240_F_1305213469_KY3qx23jZ6BeHS3CVxazrZsfoXczdLeb.jpg",
      description :"I got job  in Vishal Mega Mart "
    }])
  }

    return (
      <div style={{backgroundColor:"#dfe6e9",height:"200vh"}}>
      <button onClick={addPost}>Add post</button>
        <div style={{display:"flex",justifyContent:"center"}}>
         <div><br/> {postComponents}</div>
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
