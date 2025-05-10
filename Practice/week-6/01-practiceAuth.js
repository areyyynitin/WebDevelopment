const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "randomeCharacter"

const app = express()
app.use(express.json())

const users = [];

function logger(req,res,next){
    console.log(req.method + " request came");
    next();
}

app.get("/" , (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup" ,logger , (req,res) => {
    const username = req.body.username
    const password = req.body.password

    users.push({
        username:username,
        password:password
    })
    res.json({
        message:"You are signed up"
    })
    console.log(users)
})

app.post("/signin",logger, (req,res) => {
    const username = req.body.username
    const password = req.body.password

    let foundUser = null
    for(let i=0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i]
        }
    }

    if(foundUser){
        const token = jwt.sign({
            username:username 
        },JWT_SECRET)

        res.json({
            token:token
        })
    } else{
        res.status(403).send({
            message:"Invalid username or password"
        })
    }

    console.log(users)
})

function auth(req,re,next){
    const token = req.headers.token
    const decodedInfo = jwt.verify(token,JWT_SECRET)
    const username = decodedInfo.username
    if(username){
        req.username = username
        next()
    }else{
        res.json({
            message:"You are not log"
        })
    }
}

app.get("/me" ,auth ,logger , (req,res) => {
   let foundUser = null;
    for(let i=0; i<users.length;i++){
        if(users[i].username === req.username){
            foundUser = users[i]
        }
    }
    res.json({
        username:foundUser.username,
        password:foundUser.password
    })
   
})

app.listen(3000);





 async function signin(){ 
        const username = document.getElementById("sign-in-username").value
        const password = document.getElementById("sign-in-password").value

       const response =  await axios.post("http://localhost:3000/signin" ,{
            username:username,
            password:password
    });

    localStorage.setItem("token",response.data.token);
    alert("you are signed in")
    } 