import { useEffect, useState } from 'react'
import { PostComponent } from './post'

function App(){
  const [showTimer,setShowTimer] = useState(true);

  useEffect( ()=> {
    setInterval( () => {
      setShowTimer( currentValue => !currentValue)
    },5000)
  },[])

    //  //{} is know as conditionally rendering
  return <div>
     {showTimer &&  <Timer />}
  </div>
}

const Timer = () => {
  const [seconds,setSeconds] = useState(0)

  useEffect( () => {
   let clock = setInterval( () => {
    console.log("Inside")
      setSeconds(prev => prev+1)
    },1000)

    return function(){
        clearInterval(clock)
    }

  },[])

  return <div>{seconds} seconds  elapsed</div>
}

// dependancy rray of useeffect
// function App(){
//   const [currentTab,setCurrentTab]=useState(1)
//   const [tabData , setTabData] = useState({})
//   const [loading,setLoading] = useState(true)

//     useEffect( () => {
//       setLoading(true)
//       console.log("send request to bacckend" , currentTab)
//         fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(async res => {
//          const json =await res.json()
//       setTabData(json);
//       setLoading(false)
//     })
// },[currentTab])

//   return <div>
//     <button onClick={() => setCurrentTab(1)} style={{color:currentTab == 1 ? "red" : "orange"}}>todo1</button>
//     <button onClick={() => setCurrentTab(2)} style={{color:currentTab == 2 ? "red" : "orange"}} >todo2</button>
//     <button onClick={() => setCurrentTab(3)} style={{color:currentTab == 3 ? "red" : "purple"}} >todo3</button>
//     <button onClick={() => setCurrentTab (4)} style={{color:currentTab == 4 ? "red" : "blue"}} >todo4</button>
//     <button onClick={() => setCurrentTab (5)} style={{color:currentTab == 5 ? "red" : "green"}} >todo5</button>
//     <br />
    
//     {loading ? "loading..." :  tabData.title}
//   </div>
// }


// timer using useEffect
// function App(){
//   const [count,setCount] = useState(1)
//   const [count2,setCount2] = useState(1)

//   function increaseCount(){
//     setCount(currentvalue => currentvalue+1)
//   }

//   function decreaseCount(){
//     setCount2(currentvalue => currentvalue-1)
//   }

//   useEffect( () => {
//   setInterval(increaseCount,1000)
//   setInterval(decreaseCount,1000)
//   },[] ) //those effect will run on mount,coz the array is empty

//   useEffect( ()=> {
//     console.log("The count is updated to "+ count)
//   },[count,count2])

//   return <div>
//     {count} {count2}
//   </div>
// }

 
// // Post component
// function App() {
//     const [posts,setPosts] = useState([]);

  

//   const postComponents = posts.map(post => <PostComponent 
//       name = {post.name}
//       subtitle = {post.subtitle}
//       time = {post.time}
//       image ={post.image}
//       description ={post.description}
//   />)


//   function addPost(){
//     setPosts([...posts , {
//        name : "100x devs",
//       subtitle : "23000 followers",
//       time : 5,
//       image : "https://t3.ftcdn.net/jpg/13/05/21/34/240_F_1305213469_KY3qx23jZ6BeHS3CVxazrZsfoXczdLeb.jpg",
//       description :"I got job  in Vishal Mega Mart "
//     }])
//   }

//     return (
//       <div style={{backgroundColor:"#dfe6e9",height:"200vh"}}>
//       <button onClick={addPost}>Add post</button>
//         <div style={{display:"flex",justifyContent:"center"}}>
//          <div><br/> {postComponents}</div>
//         </div>
//       </div>
//     )
// }


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
