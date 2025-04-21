 import { quizData } from "./data";


 
const questionDivInHTML = document.querySelector(".question")
 const element = document.createElement("div");
 element.innerHTML = `${quizData[0].question}`
 questionDivInHTML.appendChild(element)

//  quizData.forEach( () => {

//  })