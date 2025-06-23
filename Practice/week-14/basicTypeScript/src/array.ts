// function getMax(num:number[]){
//     let maxValue = -1000000000000

//     for (let i =0;i<num.length ; i++){
//         if (maxValue < num[i]){
//             maxValue = num[i]
//         }
//     }
//     return maxValue;

// }

// let arr = [-9,199,-510454,70000,89,43,67]
// let ans = getMax(arr)
// console.log(ans)

interface User {
    firstName : string;
    lastName : string;
    age:number
}


function test(user:User[]){
    let ans = []
    for (let i = 0 ; i<user.length ; i++){
        if(user[i].age > 18){
        ans.push(user[i])
    } 
    }
return ans
}

const filteredUserByPush =  test([
    {
    firstName: "Nitin",
    lastName: "Prajapat",
    age: 2
},
{
    firstName : "ramesh",
    lastName : "Pal",
    age: 6
},
   {
    firstName: "sukhwinder",
    lastName: "jaat",
    age: 2
},
{
    firstName : "piyush",
    lastName : "gard",
    age: 17
},
])

console.log(filteredUserByPush)





// filtered
// interface User {
//     firstName: string;
//     lastName: string;
//     age: number
// }

// function filteredUser(user: User[]) {
//     return user.filter(x => x.age > 18)
// }

// console.log( filteredUser([
//     {
//     firstName: "Nitin",
//     lastName: "Prajapat",
//     age: 21
// },
// {
//     firstName : "Rahul",
//     lastName : "Choudhary",
//     age: 17
// },
// ]))
