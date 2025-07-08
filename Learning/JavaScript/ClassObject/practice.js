// Q

let DATA = "Student Data"

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data = ", DATA);
    }
}


let student1 = new User("Rishav", "irishav.ds@gmail.com");
let student2 = new User("Mahi", "mahi07@email.com");

let teacher1 = new User("Dean", "dean@gmail.com");



// Q2

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "Some new value";
    }
}

let admin1 = new Admin("adminName", "admin@gmail.com");


// changing data ---- admin1.editData()


// --------Error Handling --------------
// try-catch

/*
try {
...normal code
} 
catch(err) {
...handling error
}
*/

let a = 5;
let b = 12;
console.log(a + b);
console.log(a);
console.log(b);
try {
    console.log(a + d);
} catch (err) {
    console.log(err);
}
console.log(b - a);

