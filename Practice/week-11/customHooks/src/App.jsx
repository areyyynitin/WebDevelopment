import { useState } from 'react'
import './App.css'
import Counter from './hooks/Counter'
import UseEffectPost from './hooks/UseEffect'
import { useFetchPost, UsePostTile } from './hooks/UseFetch'
function App() {
  const postTitle = UsePostTile()
  
  // using UseFetch
  const [currentPost,setCurrentPost] = useState(1)
  const {finalData,loading} = useFetchPost("https://jsonplaceholder.typicode.com/posts/" + currentPost)
  if(loading){
    return <div> Loading... </div>
  }


  return ( <>
  {/* <Counter/> */}
  {/* {postTitle} */}
  <div>
    <button onClick={() => setCurrentPost(1)} > 1</button>
    <button onClick={() => setCurrentPost(2)} > 2</button>
    <button onClick={() => setCurrentPost(3)} > 3</button>
  </div>
   {JSON.stringify(finalData)}
  {/* <UseEffectPost/> */}
  </>
  )
}



export default App
