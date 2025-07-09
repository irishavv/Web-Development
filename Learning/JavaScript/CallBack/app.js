// Synchronous ---- it follow sequence

// console.log("One");
// console.log("Two");
// console.log("Three");


// Asynchronous

// function hello(){
//     console.log("Hello!");
// }
// setTimeout(hello,4000)  //we write time in millisecond, this function decide that how many time its take to run the function
// 2s means 2000ms

// below code does not wait for the any other program which take time to do work.
// console.log("four");
// console.log("five");
// console.log("six");



// callBack-----

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);


// Callback Hell --- (its create a problem)---
// -> Nasted callbacks stacks stacked below one another forming a pyramid structure. (Pyramid of Doom).

// condition i need 3 data but at the time delay of 2s;

/*
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
        if(getNextData){
            getNextData();
        }
    },2000);
    })
}
//let promise = getData(123)---promise


// this a problem of call back (because i is not easy to understand the program)
getData(1 , () => {
    getData(2, () => {
        getData(3, () => {
            getData(4)
        })
    })
});

*/


// for solving above callback hell problem we use Promises

// Promises --------------

// promise is for "eventual" completion to task. it is an object in js
// it is solution of callback hell


// let promise = new Promise((resolve,reject) => {...})

// let promise = new Promise((resolve,reject) =>{
//     console.log("I am Rishav");
//     resolve(123);
// })


// Promises ---- .then(), & .catch()

// promise.than((res) => {...})
// promise.catch((err) => {...})

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am Rishav");
//         // resolve("success");
//         reject("Network error");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });

// promise.catch((err) =>{
//     console.log("Rejected", err);
// });



// Promise chain------

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data1");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data......");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
    console.log("fetching data.1......");
    let p2 = asyncFunc1();
    p2.then((res) => {
        console.log(res);
    });
});