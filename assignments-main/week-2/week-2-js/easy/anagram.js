/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // let lowercaseString1 = str1.toLowerCase();
  // let string1 = lowercaseString1.split("");
  // string1.sort();
  // const sortedstr1 = string1.join("");
  
  //   let lowercaseString2 = str2.toLowerCase();
  //   let string2 = lowercaseString2.split("")
  //   string2.sort();
  //   const sortedstr2 = string2.join("");

    let sorted1 = str1.toLowerCase().split("").sort().join("");
    let sorted2 = str2.toLowerCase().split("").sort().join("");
    

    if(sorted1 === sorted2){
      return true;
    } else{
      return false;
    }
}

module.exports = isAnagram;


