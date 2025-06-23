// function greet(user:{name:string,age:number,gender:boolean}){
//     console.log(`Hello ..his name was ${user.name} and his/her age is ${user.age} `)
// }

// greet({
//     name:"nitin",
//     age:20,
//     gender:true
// })


interface UserType  {
    name:string,
    lastname:string,
    isSmoke:boolean
    age:number,
}

let user:UserType ={
    name:"Nitin",
    lastname:"Prajapat",
    age:20,
    isSmoke:false
}

function biodata(pizza:UserType){
    console.log(`${user.name} , ${user.lastname} , ${user.age} , ${user.isSmoke}`)
}

biodata(user)