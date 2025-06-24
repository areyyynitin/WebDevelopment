// interface User {
//     id:string
//     name:string,
//     age:number,
//     emailId : string,
//     password:string
// }

// type UpdateProps = Pick<User, 'name' | 'age' | 'emailId' >
// type UpdateOptional = Partial<UpdateProps>

// function update(item : UpdateOptional) {
//     console.log(`Name ${item.name} , Email Id ${item.emailId}, Age ${item.age}`)
// }


// update({
//     name:"Nitin",
    
// })


//  // // // /  /  / / / // /  / / / / / /  
// ReadOnly
type User  = {
    name:string,
    age:number
}


const person : Readonly<User> = {
    name:"asdfgghjhjk",
    age:23456789
} 
person.age = 6

console.log(person.age)


// // Pick want 2 things user properties and inside user ..whatever we have name,age..picck also this waant so it pick name,age from user