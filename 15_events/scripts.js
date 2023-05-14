// document.getElementById("circle").onclick = () => document.getElementById("circle").style.backgroundColor = "lightblue";
// document.getElementById("circle").onmouseover = () => document.getElementById("circle").style.backgroundColor = "lightpink";
// document.getElementById("circle").onload = () => document.getElementById("circle").style.backgroundColor = "lightgreen";
// document.getElementById("circle").onmouseenter = () => document.getElementById("circle").style.backgroundColor = "lightgreen";
//  document.getElementById("circle").onmouseleave = () => document.getElementById("circle").style.backgroundColor = "lightpink";
// document.getElementById("circle").onmousedown = () => document.getElementById("circle").style.backgroundColor = "red";
// const m = document.getElementById("circle").onclick = () => document.getElementById("circle").style.backgroundColor = "pink";


// addEventListener event, function, useCapture)
//You can add many event handlers to one element.
// Even the same event that invokes different functions
const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");
innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true); //the usecapture ensures that outer will be acted first

function changeBlue() {
    alert(" You selected ", this.id);
    this.style.backgroundColor = "lightblue";
}