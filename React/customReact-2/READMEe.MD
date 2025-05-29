I understand about how do i create my own react 

1)where first i create object credentials
const ReactElement = {
    type:'a',
    props:{
        href:'https://www.google.com/',
        target:"_blank"
    },
    children:"Welcome to google.com"
}

2) after that use pure dom method to insert value 
function  customRender(ReactElement,container){
    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children
    for (const prop in ReactElement.props) {
       if (prop == 'children') continue
       domElement.setAttribute(prop,ReactElement.props[prop])
    }
    container.appendChild(domElement)
}

3) after that i call the root file for because root file me hi sab js  react ke parts ja rhe hai
const mainContainer = document.querySelector("#root")
customRender(ReactElement,mainContainer)

All these thingss i done in Javascript but in react ..things getting little different like
1)in js we create object element[type,props(href,target),children]
but in react syntax are different 

const reactElement = React.createElement(
    'a' , //1st define a tag 2nd define object
    {
        href : 'https://google.com', target:'_blank'
    },
    'click me to visit google',
    name // after declaring all we can declare variable in react
)

2) then we have to render that element...so in 

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement 
    // <App/>
 
)

as i see the differeence between <app/> and recatElement...we can directly define element as name itself and that's it