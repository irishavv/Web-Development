// A javascript is an entity having state and behavior (properies and method).
const student = {
    // its is a direct way to create object
    // this is properties
    fullName: "Rishav kumar",
    marks: 94.4,
    printMarks: function () {
        // this is method
        console.log("marks = ", this.marks);  //this mean user are calling the same object.
    },
};   //student.printMarks()


// Js objects have a special property called prototype.
// we can set prototype using __ proto __

// we can also create own prototype
const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    }
}
//  employee.calcTax()

const rishav = {
    salary: 5000000,
};
const rishav2 = {
    salary: 5000000,
};
const rishav3 = {
    salary: 5000000,
};
const rishav4 = {
    salary: 5000000,
};
const rishav5 = {
    salary: 5000000,
};




rishav.__proto__ = employee;      //rishav.calcTax()
rishav2.__proto__ = employee;
rishav3.__proto__ = employee;
rishav4.__proto__ = employee;
rishav5.__proto__ = employee;


const karanArjun = {
    salary: 5000000,
    calcTax() {
        console.log("Tax rate is 20%");    //this will print because it will print nearest statement.
    },
};

// karanArjun.calcTax()

karanArjun.__proto__ = employee;






// ----- Classes --------

// class is a program- code templete for creating objects.
// thos objects will have some state(variables) &b som behaviour (functions) inside it.

class tataCar {
    constructor(brand,mileage) {
        console.log("creating my object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brandName = brand;
    }
}

// let Nexon = new tataCar();
// Nexon  ---- Nexon.start()
// Nexon.setBrand("Super");

//------ Constructor() method is :
// automatically invoked by new
// initializes object

// class Myclass {
//     constructor() {...}
//     myMethod() {...}
// }

let truck = new tataCar("407 Model", 8 );
console.log(truck);


// ----- Inharitance in js -----

// inheritance is passing down properties & methods from parent class to child class

/*
class Parent {

}
class Child extends Parent{

}

*/

class Parent {
    hello() {
        console.log("Hello!");
    }
}
class Child extends Parent{}

let obj = new Child();





class Person {
    constructor() {
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("Sleep");
    }
}

class Engineer extends Person {
    // super example
    constructor(branch) {
        console.log("enter child constructor");
        super() //to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }
    work() {
        console.log("Solve problem, build simething");
    }
}

// let RishavSinha = new Engineer();
let engObj = new Engineer("Computer Engineer");

// super.eat()


// if Child & Parent have same method, child's method will be used.[Method Overriding]



// --- Super KeyWord---
// the super keyword is used to call the constructor of its parent class to access the parent's properies and methods
