/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    const sorted1 = str1.sort();
    const sorted2 = str2.sort();

    if(sorted1 === sorted2){
        // is anagram
        return true;
    } else{
        return false;
    }
}

isAnagram("Nitin" , "itiNn")

module.exports = isAnagram;