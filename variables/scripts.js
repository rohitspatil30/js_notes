console.log(34);
console.log(34 + 67.5);// the js usually does not differentiate between int and float. so the division operator can give the fractional number too
// ----------------------------------------
// The normal BODMAS.
// =================RUNNING===============
/*
let a = 45;
let b = 67.90;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / 2); // will give 22.5 as the answer 
console.log(a % b); //remainder
*/
// =================RUNNING===============

// --------------------------------------------
// =================RUNNING===============
// compound methods. shortcut to  : a = a (+,-,*,/,%) number.
/*
console.log("compound assigment : ");
a += 56;
console.log(a);
a -= 30;
console.log(a);
a /= 2;
console.log(a);
a %= 23;
console.log(a);
a *= 4;
console.log(a);
*/
// =================RUNNING===============
// ----------------------------------------

console.log("opeartor precedence : (2+4)-5/2*23 : ", (2 + 4) - 5 / 2 * 23);

// =================RUNNING===============

// math function :
/*
let x = 6.4
console.log(Math.round(x));
x = 3.54;
console.log(Math.round(x));
x = 3.1;
console.log(Math.ceil(x));
x = 3.9;
console.log(Math.floor(x));
x = 4;
console.log(Math.sqrt(x));
x = 9;
console.log(Math.pow(x, 2));
x = -344;
console.log(Math.abs(x));
let y = 45;
console.log(Math.max(x, y));
console.log(Math.min(x, y));
*/
console.log(Math.floor(Math.random() * 6) + 1);// we have made an  offset to 0 to 6 

// =================RUNNING===============
// program to find the hypotenuse of the triangle using the html ,
/*
let base;
let height;
let hypotenuse;
document.getElementById("baseSubmit").onclick = function () {
    base = document.getElementById("base").value;
    console.log("the base is : " + base);
    document.getElementById("baselabel").innerHTML;

}
document.getElementById("heightSubmit").onclick = function () {
    height = document.getElementById("height").value;
    console.log("the height is : " + height);
    document.getElementById("heightlabel").innerHTML;
    hypotenuse = Math.sqrt((Math.pow(base, 2) + Math.pow(height, 2)));
    document.getElementById("ans").innerHTML = hypotenuse;
}

*/
// =================RUNNING===============

// ===================================================
//logical operators : AND && , OR || ,NOT !
// =================RUNNING===============
let a = 45;
if (a > 40 && a < 50) console.log("hi");
else console.log("hello");
a = 30
if (a > 80 || a <= 30) console.log("chai");
else console.log("coffee");
if (a != 30) console.log("warm");
else console.log("cold");
if (!(a < 20)) console.log("good");
else console.log("bad");

a = false
if (!a) console.log("true");
else console.log("false");









