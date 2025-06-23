
// // Unions
// type GoodUser = {
//     name : string;
//     gift : string
// }

// type BadUser = {
//     name : string;
//     ip : string
// }

// type User = GoodUser | BadUser

// const user:User = {
//     name:"Nitin",
//     ip:"189.0.5.809"
// }




// InterSection
// type Employee = {
//     name : string;
//     startDate : Date
// };

// type Manager = {
//     name : string
//     department : string
// };

// type TeamLead = Employee & Manager

// let e : Employee = {
//     name : "Nitin",
//     startDate : new Date("2025-06-23")
// }

// let m : Manager = {
//     name : "Ramesh Ji",
//     department : "Electroncis"
// }


// const teamLead : TeamLead = {
//     name:"Nitin",
//     department:"SDE",
//     startDate: new Date("2025-06-23")
// }

// console.log(teamLead.department)
