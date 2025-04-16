const required = require("fs")
let content = required.readFileSync("c.txt","utf-8")
console.log(content);