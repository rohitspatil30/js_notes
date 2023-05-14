/*
again loops in the js are exactly same to the c++ loops
along with it we have break and continue statements :

*/
// ============running=============
/*
let a = 45;
while (a >= 0) {
    console.log(a);
    a -= 3;
}
console.log("loop over ");

do { //this will print -3 even tho the condition does not satisfy
    console.log(a);
} while (a >= 0);

console.log("the do while loop over");

// ------
for (let i = 0; i < 23; i++) {

    if (i == 17) { console.log("bye"); break; }
    else {
        if (i == 10) {
            continue;
        }
    }
    console.log(i);
}
let s = "rohit patil is bad boy ";
let n = s.length;
for (let i = 0; i < n; i++) {
    process.stdout.write(s.charAt(i));
}
console.log();
// ==========================

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write("*");
    }
    console.log();
}
*/
// =============running=============
let rows;
document.getElementById("submit").onclick = function () {

    rows = document.getElementById("rows").value;
    for (let i = 1; i <= rows; i++) {

        for (let j = 1; j <= i; j++) {
            document.getElementById("print").innerHTML += "*";
            // process.stdout.write(j); // the j is concatenating always to the previous string
        }
        document.getElementById("print").innerHTML += "<br>";
        // console.log(); //ids are important, br is concatinating to the string produced above in the inner for loop
    }
    /*
    actual innerHTMl : 
    0<br>
    01<br>
    012<br>
    0123<br>
    */
}