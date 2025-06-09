import { useEffect, useState } from 'react'
import './App.css'
import Counter from './hooks/Counter'
import UseEffectPost from './hooks/UseEffect'
import { useFetchPost, UsePostTile } from './hooks/UseFetch'
import UsePrev from './hooks/UsePrev'
import useDebounce from './hooks/UseDebounce'
import useDebounce2 from './hooks/UseDebounce'

function App() {
  const postTitle = UsePostTile()

  // using UseFetch
  const [currentPost, setCurrentPost] = useState(1)
  const { finalData, loading, error } = useFetchPost("https://jsonplaceholder.typicode.com/posts/" + currentPost, 10)
  if (loading) {
    return <div> Loading... </div>
  }


  return (<>
    {/* <Counter/> */}
    {/* {postTitle} */}
    {/* <div>
      <button onClick={() => setCurrentPost(1)} > 1</button>
      <button onClick={() => setCurrentPost(2)} > 2</button>
      <button onClick={() => setCurrentPost(3)} > 3</button>
    </div>
    {JSON.stringify(finalData)} */}
    {/* <UseEffectPost/> */}
    {/* <PreviousHook/> */}
    {/* <Debounce /> */}
    <Debounce2/>
  </>
  )
}


function PreviousHook() {
  const [state, setState] = useState(0)
  const prev = UsePrev(state)

  return (
    <>
      <p> {state}</p>
      <button onClick={() => setState(current => current + 2)}>Click me</button>
      <p> Previous value = {prev}</p>
    </>
  )
}

function Debounce2() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce2(inputVal , 1000)

  function change(e) {
    setInputVal(e.target.value)
  }

  useEffect(() => {
    console.log("Expensive opertion")
  }, [debouncedValue])

  return (
    <>
      <input type="text" onChange={change} />
    </>
  )


}

function Debounce() {

  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }
  const debouncedFn = useDebounce(sendDataToBackend)
  return (
    <>
      <input type="text" onChange={debouncedFn}></input>
    </>
  )


}



export default App
