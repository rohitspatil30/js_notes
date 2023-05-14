// ===============RUNNING========================
console.log("hello world, yet another language");
// the optional ; make js cool
// the js has same features as c++ and python, i will write c++copy and pythoncopy whever e have to encounter the feature of the languages
console.log(69);
// now this prints the 69 in new line : python copy
// window.alert("an error message");// shows on the browser.
/*
multi line comment , here we go.
*/
// ===============RUNNING========================
// ----------------------------------------

// variables :
/*
in javascript there are 2 ways 2 declare variables :
1) let : used to make the fucntion local to a function
2) var : make it global
*/
// ===============RUNNING========================
/*
let a;
console.log(a);//undefined
a = "rohit"; //assigned
console.log(a);
a = 56.44; //datatype changed

let $ber = 56; //definition
console.log($ber);//umm u follow variable naming rules only.

//note that we made the changes in the datatypes which is alloweed in js unlike c++  : pythoncopy 

console.log(a + 89.07);
*/
// ===============RUNNING========================
// -------------------------------------------------------------------

/*
datatypes : we have many dataypes in the js too like c++
*/
// ===============RUNNING========================
let number = 34;// int
let boolean = true;
let string = "rohit";
let float = 34.056;
// let character = 'r' //does not exist : pythoncopy just strings
console.log(number, "is a good number.");
console.log(boolean, " is opposite to false");
console.log(string, "huh long tutorial, u can use + to concatnate strings, WOW!");
console.log(float, " ok, this is just normal stuff");
// -----------------------------------------------

//now writing the stuff from js to the HTML document
document.getElementById("p1").innerHTML = "hello " + string;
document.getElementById("p2").innerHTML = "your fav number is : " + number + " isn't it?";
document.getElementById("p3").innerHTML = "is this " + boolean + " ?";
//note that whenever you are writing the text to the html give it in form of string only , so always concatenate.

