const express = require("express");
 
const app = express();
app.use(express.json());


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
    let habitLength = users[0].habit.length
    let habit=[];
    
    for(let i=0;i<habitLength;i++){
        let habitName = users[0].habit[i].habitName
       let habitId = users[0].habit[i].habitId
    habit.push({
        habitId,habitName
    })
   }

   res.json({
    habit,habitLength
})
  
})

app.post("/", (req,res) => {
    const habitId = req.body.habitID
    const habitName = req.body.habitNAME

    users[0].habit.push({
        habitId : habitId,
        habitName: habitName
        })

        res.json({
            msg:"DONE!EEE"
        })
}) 

app.put("/" , (req,res) => {
    for(let i=0; i<users[0].habit.length;i++){
     users[0].habit[i].habitName = "Done"
     users[0].habit[i].habitId ="1"
    }

    res.json({"msg" : "Put succesfull"})
})

app.delete("/" , (req,res) => {
    const newHabit = []
    for(let i=0;i<users[0].habit.length;i++){
        if(users[0].habit[i].habitId === "2"){
            newHabit.push({
                
            })
        }
    }
})

app.listen("3000")

