/*CREATE A H2 HEADING ELEMENT WITH TEXT -"HELLO JS".APPEND "FROM APNA COLLEGE STUDENTS"TO THIS TEXT USING JA */

let h1 = document.querySelector("h1");
console.dir(h1.innerText);
h1.innerText = h1.innerText += "from Apna college students.";


/*CREATE 3 DIV WITH COMMON CLASS NAME-"BOX " ACCES THEM AND ADD THEM SOME UNIQUE TEXT TO EACHEOF THEM.*/
let divs = document.querySelectorAll(".box");
let indx = 1;
for (divs of divs) {
    divs.innerText = "new unique value ${indx}";
    indx++;
}
