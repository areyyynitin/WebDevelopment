const express  = require("express")

const app = express();


//function returns boolean if the pperson is mmore than 14
function findAge(age){
    if(age>=14){
        return true;
    }else{
        return false;
    }
}

// middleware
function findAgeUsinMiddleware(req,res,next){
    const age = req.query.age
    if(age>=14){
        next();
    } else{
        res.json({msg:"Soory you are not of age yet"})
    }
}

app.use(findAgeUsinMiddleware)

app.get("/ride1"  , (req,res) => {
    res.json({
        msg:"You successfully rides the ride 1"
    })
})

app.get("/ride2"  , (req,res) => {
    res.json({
        msg:"You successfully rides the ride 2"
    })
})

app.listen(3000);