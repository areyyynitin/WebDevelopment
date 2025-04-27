const arr = [1,2,3,4,5,6,7,8,9,10]
const newarr = []

    // let evencount = 0;
    
    // for(let i=0 ; i<arr.length;i++){
    //     if(arr[i]%2 === 0 ){
    //          newarr.push(arr[i])
    //     }
    // }
   
    

// console.log(newarr)



const ans = arr.filter((n) => {
    if(n%2  === 0){
        return true
    } else{
        return false;
    }
})
console.log(ans)