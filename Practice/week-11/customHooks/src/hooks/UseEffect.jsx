import { useEffect,useState } from "react";
import React from 'react'

function UseEffectPost() {
    const [post,setPost] = useState({})

    async function getPosts(){
        const response =await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const json = await response.json();
        setPost(json)

    }
        useEffect( () => {
            getPosts();
        } ,[])


  return (
    <div>
      {post.body}
    </div>
  )
}

export default UseEffectPost
