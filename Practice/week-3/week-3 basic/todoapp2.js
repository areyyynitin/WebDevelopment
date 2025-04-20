let ctr = 1;
function addtodo(){
    const inputEl = document.querySelector("input");
    const value = inputEl.value;
    
    const createEl = document.createElement("div");
    createEl.setAttribute("id" , ctr)

    createEl.innerHTML = 
    `<div>${value}
     <button onclick="(deleting(${ctr}))">Delete</button>
     </div>`;

    document.querySelector(".inputdiv").appendChild(createEl);
    ctr = ctr+1;
}

function deleting(index){
    const delEl = document.getElementById(index);

    delEl.parentNode.removeChild(delEl);
}


