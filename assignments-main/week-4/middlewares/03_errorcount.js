
const express = require('express');

const app = express();
let requestCount = 0;


// function count(req,res,next){
//   requestCount += 1;
//   next();
// }



app.get('/user', function(req, res) {
    throw new Error("User not found")
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});


function errorhandle(err,req,res,next){
     res.status(404).send({})
}

app.use(errorhandle)

app.listen(3000);
module.exports = app;