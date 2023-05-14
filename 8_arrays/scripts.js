/*
here main advantage is that the arrays does not have a fixed size here you can just keep adding the elements as much as you want

*/
//======================RUNNING==========================
/*
let fruits = ["apple", "banana", "lemon", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     process.stdout.write(fruits[i]);
//     process.stdout.write(" ");
// }
// for(let i of fruits) console.log(i);

fruits.push("berry"); // adds the element at last
console.log(fruits);
//

fruits.pop(); // remove last index
console.log(fruits);
//
fruits.unshift("chickoo");// will add the element at first
console.log(fruits);
//
let x = fruits.indexOf("banana"); //first index of x
console.log(x);
//
x = fruits.lastIndexOf("strawberry"); //last index of x;
console.log(x);
//
fruits.reverse(); //array reversse
console.log(fruits);
//
fruits.shift();//removes first element;
console.log(fruits);
//
fruits.sort(); //lexographical
console.log(fruits);
//
fruits.slice(2, 4);
console.log(fruits);
//
let num = [1, 2, 3, 4, 5, 6];
fruits.concat(num);
console.log(fruits);
//
console.log(num);
*/
//======================RUNNING==========================
//2-D arrays.
/*
let list = [["a", "b", "c"], [1, 2, 3], ["^", "*", "@"]];
list.push([23, 45, 56, 67, 89]);
for (let i of list) {
    console.log(i);
}
list.sort();
//
for (let i of list) {
    console.log(i);
}

list[1].push("rohit");
for (let i of list) {
    console.log(i);
}

list[1].sort().reverse();
for (let i of list) {
    console.log(i);
}
*/
//======================RUNNING==========================
// spread operator = allows an iterable such as an
// array or string to be expanded
// in places where zero or more
// arguments are expected
// (unpacks the elements)
//======================RUNNING==========================

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);
console.log(...numbers);

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr . Krabs", "Plankton"];
class1.push(...class2);
console.log(...class1);

let s = "rohit patil is a noob in js";
console.log(...s);

//======================RUNNING==========================
//rest parameters uesd to pack the code between the array;
/*
let a = 3, b = 4, c = 1, d = 7, e = 10;

//now you wawnt to take sum of all the numbers given but this is just an countable what if there are uncountable then pack all the things using rest operator.

function sum(...arr) {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}

console.log(sum(a, b, c, d, e)); // 25; //COUNTABLE

// just simply pass the array;

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //UNCOUNTABLE

console.log(sum(...num)); // when you want to send the every element to the functions then spread it and collect it back using the rest operator .
// =====================================================================================================
// for.each to pass every element of the array to the function 
*/
//======================RUNNING==========================
let students = ["rohit", "amaya", "kshitij"];


function concat(student) {
    console.log(student + "!");
}


students.forEach(concat); //every element send seperately.

//================RUNNING==================================

//array.map() = executes a provided callback function
// once for each array element
// AND creates a new array
/*
let numbers = [1, 2, 3, 4, 5]; //ARRAY TO BE ACCESSED

let squares = numbers.map(square); // NEW ARRAY STORING THE MODIFIED OLD ARRAY.

squares.forEach(print);// PASSING FOR PRINTING

function square(element) {
    return Math.pow(element, 2);
}

function print(element) {
    console.log(element);
}
*/
// =====================================================================

//array :filter() = creates a new array with all elements
// that pass the test provided by a function
let ages = [18, 16, 21, 17, 19, 90]; //array to be passed

let adults = ages.filter(checkAge); //adults is the new array which will store the filtered elements from the passed element to it.
//the size of the filter array is less<=orignial array.
adults.forEach(print);

function checkAge(element) { //the filter for ages array
    return element >= 18;
}

function print(element) {
    console.log(element);
}


// =================================================================
//array. reduce () = reduces an array to a single value
let prices = [5, 10, 15, 20, 25, 30];

let total = prices.reduce(checkOut); //each time the each element is passed as well as the previous value is stored in the total variable to be passed again.

console.log("The total is: $" + total);

function checkOut(total, element) {
    return total + element;
}

// ==============================================================================