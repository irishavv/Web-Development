// we made function on time in file and when its needed than just call function it will do that job due to this no need to write code again and again.

// function  functionName(){ do work}

// Local Variables

// function print() {
//     console.log("Hello");
//     console.log("Welcome to the page");
// }

// call function
// print();

// function msg(writeMsg) {
//     console.log(writeMsg);
// }

// msg("Hi, I am Rishav Sinha");
// msg("I love JS");

// Function for sum

// function sum(x, y) {
//     console.log(x + y);
// }

// sum(5,2);

// function multi(a, b) {
//     return (a * b);
// }

// function multi(a, b) {
//     add = a * b;
//     return add;
// }

// let val = multi(4,6);
// console.log(val);

// Arrow Functions
// let arrowSum = (a, b) => {
//   console.log(a + b);
//   console.log(a * b);
//   console.log(a / b);
// };

// const print = () => {
//   console.log("Hlo! I am Rishav Sinha");
// };

// const print1 = () => console.log("Hlo! I am Rishav Sinha");

// // Q1 take string as a input and return Vowel In output

// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
//       count++;
//     }
//   }
//   return count;
// }

// // arrow function for the same (above)

// const countVowel = (str) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
//       count++;
//     }
//   }
//   return count;
// }

// forEach loop in Arrays ----- method
// example --- toUpperCase etc...

// let arr =[1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// });

// let arr =["Rishav","Swarnima","Akash","Renu","Saksham"];

// arr.forEach((val) => {
//     console.log(val);
// });

// let arr =["Rishav","Swarnima","Akash","Renu","Saksham"];

// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// });

// callbackfunction have three prameters are can use to exicute -- 1) value, 2) index, 3) array itself

// index

// arr.forEach((val, idx) => {
//     console.log(val.toUpperCase(), idx);
// });

// arr ---  which by default...

// arr.forEach((val, idx , arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });

// forEach function is a Higher Order Function/ Higher Order Methods
// it means that it use other function as a parameters or return other function as value.\

// arr1 = [1,2,3,4,5];

// arr1.forEach((val) => {
//     console.log(val**2);
// });

// Map (Array Methods)

// let x = [1,2,3,4,5];

// let newArr = x.map((val) => {
//     return val**2;
// })
// console.log(x);
// console.log(newArr);

// Filter (Array Methods)

// let y = [1,2,3,4,5,6,7,8,9];

// let even = y.filter((val) => {
//     // return val % 2 === 0;
//     // return val > 4;
//     return val < 4;
// })

// console.log(y);
// console.log(even);

// Reduce (array methods)

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let output = array1.reduce((res , curr) => {
//     return res + curr;
// })

// console.log(output);

// largest number
// const array2 = [10, 23, 47, 99, 23, 47, 23, 59, 8, 32, 43, 0, 12, -1];

// let large = array2.reduce((res, curr) => {
//   return res > curr ? res : curr;
// });

// console.log(large);

// let small = array2.reduce((res,curr) =>{
//     return res < curr ? res : curr;
// })
// console.log(small);





// Q.  filer

// let marks = [68,59,90,96,99,89,87,97,93,79];

// let output = marks.filter((val) => {
//     return val >= 90;
// })

// console.log(output);


// input

let n = prompt("Enter a number: ");
let arr = [];
for(let i = 0; i<n;i++){
    arr[i] = i+1;
};

console.log(arr);

// use reduce and sum all number

let finalSum = arr.reduce((prev , curr) => {
    return prev + curr;
});

console.log(finalSum);

// product of all number
let product = arr.reduce((prev, curr) => {
    return prev * curr;
});

console.log(product);