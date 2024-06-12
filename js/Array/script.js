let heroes = ["ironman", "batman", "antman"];
for (let i = 0; i < Array.length; i++){
    console.log(heroes[i]);
}
for (let ele of heroes) {
    console.log(heroes);   
}

/* FOR A GIVEN ARRAY WITH MARK OF STUDENT ->[85,97,37,44,76,60] .FIND THE AVARAGE MARK OF THE ENTIRE CLASS*/

let mark = [85, 97, 37, 44, 76, 60];
let sum = 0;

for (let val of mark) {
    sum += val;
}

let avg = sum / mark.length;
console.log(avg);

/*FOR A GIVEN ARRAY WITH PRICE OF 5 ITEMD->[250,645,300,900,50].ALL ITEMS HAVE AN OFFER OF 10% OFF ON THEM.CHANGE THE ARRAY OS FINAAL PRICE AFTER APPLYING OFFER*/

let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items) {
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(items[i]);
    i++;
}

// METHODS IN ARERAY

let foodItems = ["potato", "tomato", "apple", "pinaple", "litchi"];
console.log(foodItems)
// PUSH OPETATION
foodItems.push("chips", "burger", "panner");
console.log(foodItems);

// POP OPERATION

let deleteItem = foodItems.pop();
console.log(foodItems);
console.log("deleted", deleteItem);


// tostring

console.log(foodItems.toString());

// concat

let food = ["piza", "mongu-mongu"];
let Concat = foodItems.concat(food);
console.log(Concat);

// unshift
console.log(foodItems.unshift("coliflower"));

// shift
let val = foodItems.shift();
console.log("deleted", val);

// slice()
console.log(foodItems.slice(1, 3));

// splice()
console.log(foodItems.splice(1, 3, "mango", "mosroom"));
console.log(foodItems);


// in array

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
// splice
console.log(arr.splice(2, 1, 101));


/*CREATE ANARRAY TO STORE COMPANIES->"BLOOMBERY","MICRROSOFT","GOOGLE","IBM","NETFLIX" 
A. Remove the first company from the array
B. Remove uber and add ola in its place.
C. Add amazon at the end*/

let companies = ["Bloombery", "Microsoft", "Google", "IBM", "Netflix"];
console.log(companies);
console.log(companies.shift());
console.log(companies.splice(2, 1, "ola"));
console.log(companies.push("Amazon"));

