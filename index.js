// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

*/



function writeCards(array, birthday) {
  // create a new empty array
  const newArray = [];

  // for loop to iterate over the array
  for (let i = 0; i < array.length; i++) {

    //return my newArray and push new string values to it

    let message = `Thank you, ${array[i]}, for the wonderful ${birthday} gift!`;
    newArray.push(message);
    // return newArray.push(`Thank you, ${array[i]}, for the wonderful birthday gift!`);
  };

  return newArray;
}

// console.log(writeCards(["Ada", "John"], "birthday"));



function countDown() {
  let numberCount = 10;
  while (numberCount >= 0) {
    console.log(numberCount--);
  }
}

countDown();








// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gift) {
//   for (let i = 0; i < gifts.length; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`)
// }
//   return gifts;
// }










// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

// const cards = [];

// function writeCards(cards, "birthday") {
//   for (let i = 0; i < 2; i++) {
//     "Thank you, Ada, for the wonderful birthday gift!",
//     "Thank you, Brendan, for the wonderful birthday gift!",
//     "Thank you, Ali, for the wonderful birthday gift!",

// }

