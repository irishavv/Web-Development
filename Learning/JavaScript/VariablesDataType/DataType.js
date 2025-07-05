// DataTypes---- 1. Primitive Data Type ------ 2. Non Primitive
// Primitive Data type ( its have 7 data type)

// 1. number

let age1 = 24;
console.log(typeof age1);

let price1 = 100.7;
console.log(typeof price1);

// 2. String data type

let work = "RajKumar";
console.log(typeof work);


// 3. Boolean Data Type

isFollow = true;
console.log(typeof isFollow);

// 4. undefined

let x;
console.log(typeof x);

// 5. null Data Type

let b = null;
console.log(typeof b);

// 6. BigInt Data Type

let ab = BigInt("123");
console.log(typeof ab);

// 7. Symbol Data Type

let y = Symbol("Hello!");
console.log(typeof y);




// non primitive DataType---------

// Objects DataTypes--> collection of Values ----- (Arrays, Functions)

// Key : values --- object

const student = {
    fullName : "Rishav",
    age : 25,
    cgpa: 8.5,
    isPass: true,
};

console.log(student );
console.log(typeof student);

// how to see value like name or anythings
 console.log(student["fullName"]);

//  how to value with key

console.log(student["age"]);
console.log(student.age);

// how to change value in this
student["age"] = student["age"] + 15;
console.log(student.age);

student["fullName"] = "Rajesh Kumar";
console.log(student.fullName);

// In (let) we can update , in (const) we cant update but in const obj we can update key values