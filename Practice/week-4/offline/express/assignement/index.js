const express = require("express");

const app = express();


let users = [{
    name: "John",
    kidneys:[{
        healthy:false
    },
       
    ]
}]

app.use(express.json())
// console.log(users[0].kidneys[1]);

app.get("/" , (req,res) => {
    const johnKidneys=users[0].kidneys;
    const numOfKidneys = johnKidneys.length;
    let healthyKidneys = 0;
    for(let i=0; i< johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            healthyKidneys++;
        }
    }

    let unhealthyKidneys= numOfKidneys - healthyKidneys;

    res.json({
        numOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})

app.post("/" , (req,res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg:"Done!"
    })
})

app.put("/" , (req,res) => {
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})













app.delete("/" , (req,res) => {
    if(findUnhealthyKidney()){
        const newKidneys=[]
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys
    res.json({msg:"Done"});
    } 
    
    
    
    
    else{
        res.status(411).json({
            msg:"You have no unhealthy kidney"
        });
    }


    
})

function findUnhealthyKidney(){
    let atleastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney=true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(3000);