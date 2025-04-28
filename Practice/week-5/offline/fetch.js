const axios  = require("axios")

// async function main(){
//    const response = await fetch("https://www.postb.in/1745773947783-8496074553113" ,
//      {
//         method:"POST"
//     },
// );
//     const json = await response.text();
//     console.log(json);
   
// }

// axios post
// async function main(){
//    const response =await axios.post(
//     "https://httpdump.app/dumps/1a333814-936e-4c49-8450-6c15287bddf5?a=k" , {
//     username : "itin",
//     password:"12345",
//    },
//    {
//     headers:{
//         Authorization:"Bearer 123",
//     }
//    });
//     console.log(response.data);
//     }


async function main(){
   const response =await axios.get(
    "https://httpdump.app/dumps/1a333814-936e-4c49-8450-6c15287bddf5?a=k" ,
   {
    headers:{
        Authorization:"Bearer 123",
    }
   });
    console.log(response.data);
    }

main(); 