console.log("Rishav Sinha")

filename = "Rishav Kumar";
console.log(filename);

num = 27;
console.log(num);
console.log(num+1);

price = 100;
console.log(price + 10);


x = null;
console.log(x);

y = undefined;  /** dont know the value, undefined is a value which means we dont know what is there **/
console.log(y);

// Boolean Type

isFollow = false;
console.log(isFollow);


// Dynamic Variable concept

filename = "India"
console.log(filename);

//Rules
// Assignment operator "="
// Variables name is case sensitive; "a" & "A" is different.
// Only latter , digits , underscore(_) and $ sign are allowed.
// Only latter , underscore or $ should be 1st Position. like $filename, filename, _filename.

$File = "Patna";
file = "Delhi";
_file = "Hajipur";

console.log($File,file , _file);
console.log($File);
console.log(file);
console.log(_file);

// Reserved word cannot be variable names.

// better way to write code
// fullname - > fullName , isFollow, totalPrice etc..


// let, const & var--------
let name = "Bharat";
let age = 24;
let totalPrice = 1000;
console.log(name , age,totalPrice);


// use only let and const


// Dont use var to define variables in javascript due to ES6 (in 2015) launched, it re-declears...
// Use let always it cant re- declears the variable, only user can update variables .
// const cant re-declear nor change the value , user can use in maths

const PI = 3.14;
console.log(PI);


// Scope------------
// var--- Global scope -- it can access from inside the { } or also from out side; it is a old way to write;
// let -- Block scope --- only within the { }
// const -- Block scope --- only within the   { }


{
    let a = 5;
    // let a = 10; -- this will give an error because user cant create same name variable inside the same block { }
    console.log(a);
}
{
    let a =10;
    console.log(a);
}
