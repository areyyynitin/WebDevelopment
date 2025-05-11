const jwt = require("jsonwebtoken")

const content = { name: 'Nitin', accountNo: 1234, iat: 1746974084 }

const token = jwt.sign(content, "secret");
console.log(token)