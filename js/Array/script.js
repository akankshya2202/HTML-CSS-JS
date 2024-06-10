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
let avg = sum ;
console.log("avg mark of the class = ${avg}");
