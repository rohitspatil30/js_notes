// setTimeout () = invokes a function after a number of milliseconds
// asynchronous function (doesn't pause the execution)

// setTimeout(firstMessage, 3000);
// setTimeout(secondMessage, 6000);
// setTimeout(thirdMessage, 9000);
// function firstMessage() {
//     alert("Buy this course for $500!");
// }
// function secondMessage() {
//     alert('This is not a scam!');
// }
// function thirdMessage() {
//     alert("DO ITT!");
// }
// ==================================
// setInterval() = invokes a function repeatedly after
// asynchronous function (doesn't pause the executiion);
//
/*
let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);
const myTimer = setInterval(countUp, 1000);
function countUp(max) {
    count += 1;
    console.log(count);
    if (count >= max) {
        clearInterval(myTimer);
    }
}
*/

// ===========================================================================
// */ The Date object is used to work with dates & times
let date = new Date();
//let date = new Date(0);
//let date = new Date (2023, 0, 1, 2, 3, 4, 5);
//let date = new Date("January 1, 2023 00:00:00");
let year = date.getFullYear();
let day0fMonth = date.getDate();
let dayOfweek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
date = date.toLocaleString();
console.log(date);

// /=======================================================
// /=======================================================
// console.time () = Starts a timer you can use to
// track how long an operation takes
// Give each timer a unique name.
//start
console.time("Response time");
//alert("CLICK THE OK BUTTON!");
setTimeout(() => console.log("HELLO!"), 3000);
// lend
console.timeEnd("Response time");


// ==============================================

function fact(num) {
    let pro = 1;
    for (let i = 1; i <= num; i++) {
        pro *= i;
    }
    return pro;


}

console.time("fact");
console.log(fact(5));
console.timeEnd("fact");

// ==========================================================the STATE is 'pending then: 'fulfilled
// the STATE is 'pending' then: 'fulfilled'
// the RESULT is what can be returned
// 2 parts producing & consuming
// const promise = new Promise((resolve, reject) =› {
//     let fileLoaded = false;
//     if(fileLoaded) {
//         resolve("File loaded");
//     }
//     else {
//         reject("File NOT loaded");
//     }
// });
// promise.then(value => console.log(value))
// .       •catch (error => console.log(error));