/*
 objects are the real life entities witht the properties or features and the methods means what an object can do.
*/

const car = {
    model: "mustang",
    color: "red",

    drive: function () {
        console.log("the car speeds up");
    },
    breaks: function () {
        console.log("the car slows down");
    }


}

//accessing the object , note there is no class or structure in js

car.breaks();
car.drive();
console.log(car.color);

// ==========================================================

//but you cannot keep creating objects with different features again and again, so create a class

class cars {
    model;
    colour;

    constructor(colour, model) {
        this.colour = colour;
        this.model = model;
    }

    drive() {
        console.log("the car speeds up");
    }
}

//create object : 

// const bugati = new cars();
// bugati.model = "cheron"; //without constructor
// bugati.colour = "red";

const bugati = new cars("red", "cheron");
console.log(bugati.colour);
console.log(bugati.model);
bugati.drive();

const bmw = new cars("white", "POLICE");
console.log(bmw.colour);
console.log(bmw.model);
bmw.drive();

class taxi extends cars {
    carnumber;
    constructor(carnumber = "69") {
        super("red", "audi"); //or ask;
        this.carnumber = carnumber;
    }
    pickup() {
        console.log("the taxi is picking up the customer.");
    }
}

const faketaxi = new taxi("true69");
faketaxi.drive();
console.log(faketaxi.carnumber);
console.log(faketaxi.colour);

// ===============================

// arrays of objects . 

// const car1 = new cars("black", "audi");
// const car2 = new cars("blue", "audi");
// const car3 = new cars("white", "audi");

// const arr = [car1, car2, car3];
// car1.drive();
// console.log(car2.model);
// console.log(arr[2].model);
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
//now here we see that youcan directly run the objects by name coz you have defined it but what if : 

const cart = [new cars("red", "bugati"), new cars("black", "lamborghini")];
//now youcan access only tghru the index;
for (const i of cart) {
    console.log(i.model);
    console.log(i.colour);
    i.drive();
}

