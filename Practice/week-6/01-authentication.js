const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "randomName"
const app = express();

app.use(express.json())

const user = [];

// function generateToken() { 
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }
 
app.post("/signup" , (req,res) => {
  const username = req.body.username
  const password = req.body.password

  user.push({
    username:username,
    password:password
  })

  res.json({
    message:"You are signed up"
  })
  console.log(user)
})


app.post("/signin" , (req,res) => {
    const username = req.body.username
    const password = req.body.password
    
    let foundUser = null;
    for(let i=0 ; i<user.length; i++){
        if(user[i].username == username && user[i].password == password){
            foundUser = user[i]
        }
    }
    
    if(foundUser){
        const token = jwt.sign({
            username:username
        }, JWT_SECRET);
       
       
        // foundUser.token = token;
        res.json({
            token:token
        }) 
    } else{
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
    console.log(user)
}) 


app.get("/me" , (req,res) => {
    const token = req.headers.token
    const decodedInformation = jwt.verify(token,JWT_SECRET);
    const username = decodedInformation.username
    let foundUser = null;

    for(let i=0 ; i<user.length;i++){
        if(user[i].username == username){
            foundUser = user[i]
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password:foundUser.password
        })
    } else{
        res.json({
            token:"Message invalid"
        })
    }
})

app.listen(3000);