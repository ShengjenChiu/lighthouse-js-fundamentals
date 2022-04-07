//A function to determine if a number is odd or not.
function isOdd (num) {
  if(!(num % 2 === 0)) {
    //if the number's remainder is not zero, then it is an odd number. 
    return true;
  } else {
    //else it is an even number.
    return false;
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));