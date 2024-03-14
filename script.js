//* Making a while loop for a practise q1

let gameNum = 45;
let userNum = prompt("GUESS THE GAME NUMBER :");

while (userNum != gameNum) {
  userNum = prompt("You guessed the wrong number, Guess again :");
}
   
  console.log("Congratulation you entered the correct number!");