// function greet(user:{name:string,age:number,gender:boolean}){
//     console.log(`Hello ..his name was ${user.name} and his/her age is ${user.age} `)
// }

// greet({
//     name:"nitin",
//     age:20,
//     gender:true
// })


// interface UserType  {
//     name:string,
//     lastname:string,
//     isSmoke:boolean
//     age:number,
// }

// let user:UserType ={
//     name:"Nitin",
//     lastname:"Prajapat",
//     age:20,
//     isSmoke:false
// }

// function biodata(pizza:UserType){
//     console.log(`${user.name} , ${user.lastname} , ${user.age} , ${user.isSmoke}`)
// }

// biodata(user)


// 

// interface Address {
//     city: string,
//     country: string,
//     pincode: number,
//     houseNumber: string
// }

// interface Personality {
//     name: string,
//     age: number,
//     role: string,
//     address:Address
// }


// let user: Personality   = {
//     name: "Nitin",
//     age: 22,
//     role: "intern",
//     address : {
//         city:"mumbai",
//         houseNumber:"1-B",
//         country:"India",
//         pincode:400001
//     }


// }

// function isLegal(vadapav: Personality): boolean {
//     return vadapav.age > 17;
// }

// console.log(isLegal(user))
// console.log(user)
// console.log("")
// console.log(user.address.houseNumber)



// fucntion inside interface

interface People {
    name: string,
    age: number
    greet?: () => void
}

// let person: People = {
//     name: "Nitin Prajapat",
//     age:90,
//     greet: () => {
//         return `Hello ${person.name}`
//     }
// }

// console.log(person)
// console.log(person.greet())

// class Manager implements People{

//     constructor (public name:string,public age:number){
//         this.name = name;
//         this.age = age
//     }
// }

// let user = new Manager("Nitin" , 90)
// console.log(user)
