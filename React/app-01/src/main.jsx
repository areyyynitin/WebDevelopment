import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://www.google.com/',
//         target:"_blank"
//     },
//     children:"Welcome to google.com"
// }

const anotherElement = (
    <a href="https://google.com"  target='_blank'>Visit google</a>
)

   let name = 12344

const reactElement = React.createElement(
    'a' , //1st define a tag 2nd define object
    {
        href : 'https://google.com', target:'_blank'
    },
    'click me to visit google',
    name // after declaring all we can declare variable in react
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement 
    // <App/>
 
)
