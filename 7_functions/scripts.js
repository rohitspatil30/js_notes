/*
functions  are the block of code used to do a tassk repeatedly.
*/
//==================================================
//non parameterized function.
// ===================RUNNING==========================
/*
function happy() {
    console.log("happy birtday ");
    let age = window.prompt("enter your age");
    if (age >= 18) {
        console.log("you are an adult now.");
    }
    else console.log("still", 18 - age, "years to go, to have your first drink!!");

}

happy();
happy();
// console.log(age); //the let variable is a scoped variable as discussed earlier we dont have to
*/

// ===================RUNNING==========================
//parameterized function:  passing values to the function
/*
function favnum(num) {

    if (num == 3 || num == 7) console.log("wow, same here");
    else console.log("bad choice, >:( ");
}
num = window.prompt("enter your favorite number : ");
favnum(num);
*/
// ===================RUNNING==========================
// return statement :  used to return value from the fucntion :
// the function returns the value without taking input.
/*
function even_odd() {
    let num = window.prompt("Enter a number : ");
    if (num % 2 == 0) return "even";
    else return "odd";
}

console.log(even_odd());
*/
// ===================RUNNING==========================
//with return value and with arguments :
//note that the arguments does not have a return value so it means that you only write the the variable name you want to pass , also istead of storing the return value somewhere you can directly.
/*
function division(a, b) {
    return a / b;
}
let ans = division(5, 3);
console.log(ans);
*/
// ===================RUNNING==========================
// using teranry in return or printing :
/*
function answer(a, b) {
    // return (a > b) ? "true" : "false"; return one
    (a > b) ? console.log("a is bigger") : console.log("b is bigger");
}
// console.log(answer(3, 6)); return one
answer(12, 89);

*/
// ------------- ---------------

//let vs var:  lat is better as it doesnot change some of the global properties.

// ===========================================

// conversion of temperature from or to farenheit and celcius
// ===================================================================================

// function expression : the fucntion expression can assign an funciton to an expression  

//og : 
// function sum(a, b) {
//     return a + b;
// }

// but now 
//functions expression : 

const sum = function (a, b) { return a + b };
console.log(sum(2, 3));

//this is helpful when we want to assign the function to the HTML button
/*
<submit onclick="increasevalue">  --> here we are calling the function by its name.

but

js. ---> getbyid("submit"),onclick = function(){}--> here we assign the expreesion to the function

*/

// ===========================================================================================
// ===================RUNNING==========================

// arrrow funciton : 
// arrow function = compact alternative to a traditional funciton
// =>
/*
let grades = [100, 50, 90, 60, 80, 70]; // this is basically the lambda function if you have a one line code then do this
grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));
*/

// ===================RUNNING==========================
/*
let names = ["k", "a", "r", "z"];

const print = (element) => process.stdout.write(element);

names.forEach(print);
*/

// ============================================

// document.getElementById("submit").onclick = () => document.getElementById("temp_input").innerHTML = "hello, error 404!";
//this can do only one work 
// ===================RUNNING==========================

// NESTED FUNCTONS  : 

// THIS IS AN ACTUAL WEB SECURITY DEVELOPMENT FEATURE WHICH RESTRICTS THE ACCESS TO SOME FUNCTIONS UNLESS YOU PERFORM A SPECAIAL TASK SUCH AS LOGIN AND THEN ONLY REGISTER

//the function inside are unkown to outside functions or console .
// outer function  have access to inner funtion : 

let logged = true;
login(logged);

function login(logged) {
    if (logged == true) {
        register();
        // details(); //not accessible as it is inside a functions 

    }

    function register() {
        console.log("you are ready to register !! please provide your details below ");
        details();//accessed
        function details() {
            console.log("failed to register.");
        }
    }
}




