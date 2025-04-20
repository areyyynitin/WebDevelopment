let ctr =1;
function deletetodo(index){
    const element = document.getElementById(index);
   
    element.parentNode.removeChild(element)
}
// function addTodo(){
//     const inputVal = document.querySelector('input');
//     const addTask = document.querySelector('.addTask');
//     let value = inputVal.value;
//     addTask.innerText = value;
  

// }

function addTodo(){
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    
    const element = document.createElement("div");
    element.setAttribute("id" , ctr);

    
    element.innerHTML= `
    <div>${value}
     <button onclick="(deletetodo(${ctr}))">delete</button> 
     </div>`;
     document.querySelector(".inputdiv").appendChild(element);
     ctr=ctr+1;
     inputEl.value='';
}