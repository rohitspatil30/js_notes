const myimg = document.getElementById("myImg");

document.getElementById("myButt").onclick = function () {
    if (myimg.style.display == "none") {
        myimg.style.display = "block";
    }
    else {
        myimg.style.display = "none";
    }
    console.log("hi there");
}

// document.getElementById("myButt").onclick = () => console.log("you pressed the button");