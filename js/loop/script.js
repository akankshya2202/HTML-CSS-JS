// for loop
//example 1
let sum = 0;
for (let i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log("sum =", sum);

//exmple 2
let n = 10
for (let i = 1; i <= n; i++){
    console.log(n)
}

// while loop

let i = 1;
while (i <= 100) {
    console.log("akankshya");
    i++;
}

// do-while loop

let a = 20;
do {
    console.log("akankshya");
    a++;
} while (a <= 10);

// for-of loop

let str = "Akankshya";
for(let i of str){
   console.log("i =",i)
}

let st = "akankshya";
let size;
for (let i of str) {
    console.log("i =", i);
    size++;
}
console.log("string size =", size);

// for in loop
let student = {
    name: "akakshya joshi",
    age: 22,
    cgpa: 9.5,
    ispass: true
};
for (let key in student) {
    console.log("key =", key,"value =", student[key]);
}

// print all even nummbers from 0-to-100

for (let num = 0; num <= 100; num++){
    if (num % 2 === 0){//even number
        console.log(num);
    }
}

// odd number
for (let num = 0; num <= 100; num++){
    if (num % 2 !== 0){//even number
        console.log(num);
    }
}

/* create a game where you start with any random game number .Ask the user to keep guessing the game number untill the user enters correct value*/

let gameNum = 25;
let userNum = prompt("guess the game number");
while (userNum != gameNum) {
    userNum = prompt("You entered wrong number ,guess again:");
}
console.log("Congratulation,you entered the right number.");