// product
const product = {
    title: "Ball pen",
    rating: 4,
    offer: 5,
    price: 270
};

console.log(product);
// profile page
const profile = {
    username: "akankshya",
    isFollow: false,
    followers: 123,
    following: 123
};

console.log(profile);

//Arithmetic operators

let a = 5;
let b = 2;
console.log("a + b = ", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// UNARY OPERATORS

let c = 5;
let d = 2;
console.log("c = ", c, "d =", d);
c = c ++;
console.log(c)

c = ++c;
console.log(c)

c = c --;
console.log(c)

c = --c;
console.log(c)

// Assignment operator

let p = 7;
let o = 7;
console.log("p == o", p == o)

let pq = 7;
let or = 4;
console.log("pq == or", pq == or)

let ab = 7;
let cd = 4;
console.log("ab === cd", ab === cd)

// LOGICAL OPERATOR

let m = 9;
let n = 4;
console.log("cond1 && cond2", m < n && m === 9)
console.log("cond1 || cond2", m < n || m === 9)
console.log( "!(m<n )",!(m<n ))

// Conditional Satement

let age = 18;
if (age >= 18) {
    console.log("you can vote")
}

//dark and light mode
// if stmt

let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
}
if(mode == "light"){
    color = "white";
}
console.log(color)

// if-else stmt

let mode1 = "light";
let color1;
if (mode1 === "dark") {
    color1 = "black";
}
else{
    color1 = "white";
}
console.log(color1)

// odd & even

let num = 10;
if (num % 2 === 0) {
    console.log( num ,"is even");
}
else{
    console.log("odd");
}

// else-if


let mode2 = "light";
let color2;
if (mode2 === "dark") {
    color2 = "black";
}
else if (mode === "blue") {
    color2="blue"
}
else{
    color2 = "white";
}
console.log(color2)

// conditional stmt

let age1 = 18;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);







