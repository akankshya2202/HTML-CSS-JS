/* CREATE A FUNCTION USING THE "FINCTION" KEYWORRD THAT TAKES A STRING AS AARGUMENT & RETURN TEH NUMBER OFF VOWELS INN THE STRING.*/

function countVal(Akankshya) {
    let count = 0;
    for (const char of Akankshya) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;

        }
    }
    console.log(count);
}



// FOR EACH LOOP

let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((val) => {
    console.log(val);    
});

/* FOR A GIVEN ARRAY OF NUMBERS,PRINT THE SQUARE OF EACH VALUE USING THE FOR eACH LOOP*/

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let calSquare = (num) => {
    console.log(num * num);

};
num.forEach(calSquare);

// MAP MATHOD

let nums = [67, 89, 2];
let newArray = nums.map((val) =>{
    console.log(val);
});

// FILTTER
let array = [1, 2, 3, 4, 6, 7, 8, 9, 5];
let newArr = array.filter(val  => {
    return val % 2 == 0;
});

// REDUSE

const arra = [1, 2, 3, 4, 5];
const initialValue = 0;
const sum = arra.reduce
    (accu , curr =>{
    accu +curr, initialValue;
} );
