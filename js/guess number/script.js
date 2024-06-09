let gameNum = 25;
let userNum = prompt("guess the game number");
while (userNum != gameNum) {
    userNum = prompt("You entered wrong number ,guess again:");
}
console.log("Congratulation,you entered the right number.");