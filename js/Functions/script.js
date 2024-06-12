function myFunction() {
    console.log("hii");
    console.log("isha");
}
myFunction();


function msgFunction(msg) {
    console.log(msg);
   
}
msgFunction("I love js");

function sum(a,b) {
    console.log(a+b);
    
}
sum(2, 4);

function sum1(x,y) {
    s = x + y;//local variable
    return s;
}
let val = sum1(3, 8);
console.log(val);


// ARROW FUNCTION

const sum2 = (a, b) => {
    console.log( a + b);
}
sum2(9, 1);

const printHello = () => {
    console.log("hello");
}

/* CREATE A FUNCTION USING THE "FINCTION" KEYWORRD THAT TAKES A STRING AS AARGUMENT & RETURN TEH NUMBER OFF VOWELS INN THE STRING.*/

function countVowels(str){
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || cahr === "i" || char === "0" || char === "u") {
            count++;    
        }
    }
    console.log(count);
}
/*CREATE AN ARROE FUNCTION TO PORFORM SOME TASK */

const countvaw = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || cahr === "i" || char === "0" || char === "u") {
            count++;    
        }
    }
    console.log(count);
}