import React from "react";
function App() {
    //    const todos = [{
    //     title:"Go to gym",
    //     done:false
    //    },{
    //     title:"Go to walk",
    //     done:true
    //    }]

    //    const todoComponents = todos.map(todo => <Todo title={todo.title} done={todo.done} />)

       return (
       <div>
            {/* {todoComponents} */}
            <Todo key={1} title={"Go to gym"} done={false}  />
            <Todo key={2} title={"Go to eat"} done={true}  />
        </div>
       )      
}


function Todo({title,done}){
    return <div>
        {title} - {done ? "Done hogaya" : "Just give up"}
    </div>
}

export default App;