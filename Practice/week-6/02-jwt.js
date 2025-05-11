const jwt = require("jsonwebtoken")

const value = {
    name:"Nitin",
    accountNo: 1234
}

// const token = jwt.sign(value, "secret");
const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTml0aW4iLCJhY2NvdW50Tm8iOjEyMzQsImlhdCI6MTc0Njk3NDA4NH0.gABuL3XW0BfrUDc0M1x7mkzup2Z58qf4eF6nzsJjri8", "secret");
// const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTml0aW4iLCJhY2NvdW50Tm8iOjEyMzQsImlhdCI6MTc0Njk3NDA4NH0.BNhGSifAYUIB8KzcLdVtrWZFN5nZ_v0hM0LSp971xpQ", "secret");
console.log(token)