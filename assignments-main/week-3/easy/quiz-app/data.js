//  use this quizData in your app.
 const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]

let id =1;
let count = 0;

const questionDiv = document.querySelector(".question")
const answersDiv = document.querySelector(".answers")
    // questionDivInHTML.innerHTML = `${quizData[count].question}`

    function quiz(){
        const current = quizData[count]
        questionDiv.innerHTML = current.question;
        answersDiv.innerHTML = `
        <div class="option">
      <label><input type="radio" name="answer" value="a"> ${current.a}</label>
    </div>
    <div class="option">
      <label><input type="radio" name="answer" value="b"> ${current.b}</label>
    </div>
    <div class="option">
      <label><input type="radio" name="answer" value="c"> ${current.c}</label>
    </div>
    <div class="option">
      <label><input type="radio" name="answer" value="d"> ${current.d}</label>
    </div>
  `;

    }
    
    
    function nextQuestion(){
    const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Please select an answer.");
    return;
  }

  const answer = selected.value;
  if (answer === quizData[count].correct) {
    alert("Correct! ✅");
  } else {
    alert("Wrong ❌");
  }

  count++;
  if (count < quizData.length) {
    quiz();
  } else {
    questionDiv.innerText = "🎉 You've completed the quiz!";
    answersDiv.innerHTML = "";
    }
}
window.onload = quiz
    



       
    
    


    
