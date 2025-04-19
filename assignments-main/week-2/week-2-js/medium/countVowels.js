/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
   let  vowels = str.toLowerCase().split("").sort().join("")
    let count = 0;
    for(let i =0 ; i<vowels.length ; i++){
      let char = vowels[i];
      if(char === 'a'  || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        count++;
      }
    }

    return count;
    
}

module.exports = countVowels;