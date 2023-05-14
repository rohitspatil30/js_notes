/*
the else if is exactly as same as in the c++
*/
// ===============RUNNING============
/*
let age = 69;
if (age >= 18 && age < 60)
    console.log("you are ready to vote");
else if (age >= 60)
    console.log("ok, you are now old")
else
    console.log("grow up kid");
*/
// ===============RUNNING============
// single line then ok to skip {}
// ===============RUNNING============
/*
let username;
document.getElementById("submit").onclick = function () {
    // username = document.getElementById("radio"); //optional while checking checked
    if (document.getElementById("radio").checked == true) {
        console.log("your name is : " + "rohit");
        document.getElementById("print").innerHTML = "Your name is : " + "rohit";
    }
    else {
        window.alert("please enter your name ");
        document.getElementById("print").innerHTML = "invalid input.";

    }
}
*/
// ===============RUNNING============
// ========================================================================
/*
switch case in the javscript is same as  :  c++ again matlab shame to shame
*/
/*
let num = 1;
switch (num) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Firday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid input !!");
}
*/
// =====================================================================
// ternary operator : 

// ===================RUNNING==========================
let a = 4;
let b = 23;
let min = (a > b) ? b : a;
console.log(min);