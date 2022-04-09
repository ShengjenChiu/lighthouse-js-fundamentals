const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

// //Iterating Over an Array With for loop that starts from 0.
// console.log("Kitchen stuff to pack:");
// for (let i = 0; i < packingList.length; i++) {
//   console.log(packingList[i]);
// }

// packingList[3];


//Iterating Over an Array With while loop
console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}