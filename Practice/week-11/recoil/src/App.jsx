import './App.css'
import Atoms from './Atoms'
import Counter from './Counter'
import CounterMemo from './store/memo/CounterMemo'
import SelectorApp from './store/Selector/Selector'


function App(){

  return (
    <div>
      <AppforALL/>
    </div>
  )
}
function AppforALL() {


  return (
    <>
      <div style={{ display: 'flex',  }}>
        <div>

          {/* <h5>Counter using Atoms state <Atoms /> </h5> */}
        </div>
        <div style={{marginLeft:'20px'}}>

          {/* <h5>Counter using Use state <Counter /> </h5> */}
        </div>

        <div style={{marginLeft:'20px'}}>

          {/* <h5>Counter using Memo  <CounterMemo /> </h5> */}
        </div>

         <div style={{marginLeft:'20px'}}>

          <h5>Counter using Memo  <SelectorApp /> </h5>
        </div>
      </div>


    </>
  )
}


export default App
