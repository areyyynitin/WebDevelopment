function sum(num1,num2){
    return Number(num1) +Number(num2);
}

let ans = sum(4,5);
// console.log(ans);

let ans2 =sum('9','2')
// console.log(ans2);

function canVote(age){
    if (age < 18){
        console.log(`You can't vote..you just ${age}`);
    }else if(age === 18){
        console.log(`Congrats you turn ${age}`)
    } else{
        console.log("You are adult")
    }
}

// canVote(2);

function greetUser(userName){
    let user={
        name:`${userName}`
    }

    console.log(`Hello ${user.name}!`)
}

// greetUser('Nitin');



function greetUsers(person){
 person.forEach( (person) => {
    if(person.age >= 18 && person.gender === 'male'){
            console.log(`Hello Mr.${person.name} ${person.lastname}! You are ${person.age} soo you can vote `)
            }
             else if(person.age >= 18 && person.gender === 'female'){
                console.log(`Hello Mrs.${person.name} ${person.lastname}! You are ${person.age} soo you can vote `)
            }
             else if(person.age < 18 && person.gender === 'male'){
            console.log(`Hello Mr.${person.name} ${person.lastname}! You are ${person.age} soo you CANNOT vote`)
            }
            else if(person.age < 18 && person.gender === 'female'){
            console.log(`Hello Mrs.${person.name} ${person.lastname}! You are ${person.age} soo you CANNOT vote`)
            }
             else{
                console.log('Enter Valid  Input')
            }
} )
}
// greetUsers(user);

//  forEach.namaskar(person){
//     if(person.age >= 18 && person.gender === 'male'){
//         console.log(`Hello Mr.${person.name} ${person.lastname}! You are ${person.age} soo you can vote `)
//     }
//      else if(person.age >= 18 && person.gender === 'female'){
//         console.log(`Hello Mrs.${person.name} ${person.lastname}! You are ${person.age} soo you can vote `)
//     }
//      else if(person.age < 18 && person.gender === 'male'){
//     console.log(`Hello Mr.${person.name} ${person.lastname}! You are ${person.age} soo you CANNOT vote`)
//     }
//     else if(person.age < 18 && person.gender === 'female'){
//     console.log(`Hello Mrs.${person.name} ${person.lastname}! You are ${person.age} soo you CANNOT vote`)
//     }
//      else{
//         console.log('Enter Valid  Input')
//     }
// };

// namaskar(user);
let user =[ {
        name:'Nitin',
        lastname:'Prajapati',
        age:122,
        gender:'male'
    }, {
        name:'Akshay',
        lastname:'Prajapati',
        age:52,
        gender:'male'

    }, {
        name:'Girl-1',
        lastname:'RandomSurname',
        age:25,
        gender:'female'
    }, {
        name:'Girl-2',
        lastname:'AgainRandomSurname',
        age:15,
        gender:'female'
}]

function arrayOfObjects(person){
    const messages =[];
    person.forEach( (person) => {
    if(person.age >= 18 && person.gender ==='male'){
          messages.push(`Hello Mr.${person.name} ${person.lastname}! You are ${person.age} soo you can vote `)
    }
    });
    return messages;
}

console.log(arrayOfObjects(user));
 