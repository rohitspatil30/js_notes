/*
DOM is what we can access using the HTML document using the js lang
*/

console.log(document);
console.log(document.title);
console.log(document.body.style.backgroundColor = "lightblue");
document.getElementById("myPTag").innerHTML = "there is something changed!!";
document.getElementById("myPTag").style.color = "red";

let myCheckBox = document.getElementsByName("fruits");
console.log(myCheckBox);


// ===================================================
// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// •textContent (more secure)
const nameTag = document.createElement("h1");
nameTag.textContent = "window.prompt;";
document.body.append(nameTag);
// const myList = document. querySelector("#fruit");
// const listItem = document. createElement ("li");
// listItem.textContent = "mango";
//myList.append(listItem);
//myList.prepend(listItem);
let h1 = document.getElementById("myPTag");
h1.style.backgroundColor = "darkblue";

const h2 = document.createElement("h2");
h2.style.textAlign = "center";
h2.style.borderStyle = "solid";
h2.style.borderColor = "white";
h2.style.borderRadius = "30px";
h2.style.borderSpacing = "600px 600px 600px 600px";
h2.style.borderWidth = "4px";
h2.style.padding = "20px";
h2.style.position = "relative";
// h2.style.width = "400px";
// h2.style.alignItems = "center";
h2.style.top = "50%";
h2.style.width = "50%";
h2.style.left = "50%";
h2.style.right = "50%";
h2.style.transform = "translate(-50%, -50%)";



h2.textContent = "ok i am new here";
document.body.append(h2);


// document.nextSibling.backgroundColor = "red"; //dom traversal
