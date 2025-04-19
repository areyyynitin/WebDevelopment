/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let filterSorted = '';
  for(let char of str){
    if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')){
      filterSorted = filterSorted + char.toLowerCase();
    }
  }

  let left = 0;
  let right = filterSorted.length-1;

  while(left < right){
    if(filterSorted[left] !== filterSorted[right]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
