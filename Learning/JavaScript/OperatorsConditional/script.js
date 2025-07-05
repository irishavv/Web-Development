// we can write comment in this way(// after this symbol we can write the comment)
// this is single line comment
//  this will never effect on code it is only for understanding purpose..
/* this a way to write multi line comment */


// Operators In js------------
// 1. Arithmetic Operator ( + , - , * , /, Modulus , Exponentiation, Increment, Decrement)
//  1 + 2 = 3---- (1+2)  - Expression , (1,2) is called operands, + operator...


let a = 5;
let b = 2;
let c = a + b;
console.log(c);

let sub = a - b;
console.log(sub);

let multi = a * b;
console.log(multi);

let div = a / b;
console.log(div);

let modulus = a % b;
console.log(modulus);

let Exponentiation = a**b;
console.log(Exponentiation);


// unary operator

console.log(++b);   // pre
console.log(--a);  //pre


let d = 10;
d++;                     // post
console.log(d);

let j = 8

j--;                    // post
console.log(j);




// Assingment Operators ---- assign the value
//   = , += , -= , *= , %= , **=


let r = 6;
let s = 7;

r += 7;  // r = r + 7; --- r = 6 + 7 = 13
console.log(r);


// Comparision Operator
//  == ( Equal to) , === (Equal to & Datatype) , != (not equal to), !== (not equal to & DataType), >= , <= .

let num = 76;
let number = 67;

console.log(num == number);   // false return...


// Logical Operators

// AND (&&) , OR (||) , NOT (!)

let k = 7;
let h = 5;

// AND(&&)  in this condition all the condition should be true than it will return true , if not than it will return false..

let cond1 = k > h;
let cond2 = k === 7;
console.log(cond1 && cond2);

let cond3 = k > h;
let cond4 = k === 9;
console.log(cond3 && cond4);

// OR(|| in this condition if any one of condition is true than it will return true otherwise it will return false)

console.log(cond3 || cond4);


// NOT (!) in this condition if any condition is return ture than it will make it false ,  simply it reverse the output
// it requires only one condition...

console.log(!(h===5));


