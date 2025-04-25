const express = require("express");
 
const app = express();

let users=[{
    habit:[{
        habitName:"Sleep Early",
        habitId:"1"
    },
{
    habitName:"Now sleep",
    habitId:"2"
}]
}]
app.get("/" , (req,res) => {
   let habitId = users[0].habit[0].habitId
   let habitName = users[0].habit[0].habitName
   let habitLength = users[0].habit.length

   res.json({
   habitId,habitName,habitLength
   })
})

app.listen("3000")