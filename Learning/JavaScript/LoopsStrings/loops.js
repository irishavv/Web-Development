/*
// Rishav printing for 1000 times....

for(let i = 0; i < 1000; i++){
    console.log(Rishav);
}
*/

// sum of 1 to 10

/*
let sum = 0;

for(let i = 1; i <= 10; i++){
    sum = sum + i;
}
console.log(sum);

*/

// While loop

/*
while(condition){
//do some work
}
*/

/*
i = 1;
while(i <=10){
    console.log(i);
    i++;
}
*/

// Do-while loop

/*
do{
}while(condition);
*/

/*

let i = 27;

do{
    console.log("Rishav");
    i++;
}while(i <= 10);

*/



/* 

let i = 1;

do{
    console.log(i);
    i++;
}while(i <= 10);

*/


// for-of Loop

/*

for(let val of strVar){
    do work
}

*/


/*


let fullName = "Rishav Kumar"
let size = 0;

for(let i of fullName){
    console.log(i);
    size++;
}

console.log(size);

*/

// for-in loop   ---- it will work on object


/*

let student = {
    name:  "Rishav Kumar",
    age: 25,
    cgpa: 8.9,
    isPass: true,
};
let size = 0;
for(let i in student){
    console.log(i, student[i]);
    size++;
}
console.log(size);

*/



// Qs1. Print all even number from 0 to 100.

/*

for(let i = 0; i <= 10; i++){
    if( i % 2 === 0 ){
        console.log(i);
        i++;
    }else{
        i++;
    }
}

*/

// Qs2. guess number game

/*

let gameNum = 55;

let userNum = prompt("Guess the number: ");
while(userNum != gameNum){
    userNum = prompt("You have entered wrong number. Guess once again: ");
}
console.log("You are finally guess the exact number");

*/

//  --------------------------String------------------------------------

// let str = "Rishav";


// let country = "Hindustan";
// console.log(country.length);

// console.log(country[0],country[1],country[2],country[3],country[4]);

// let sentence = `This is a special string`;
// console.log(sentence);
// console.log(typeof sentence);

//user use this for not writing "" '' again and again

/*

let product = {
    item: "Book",
    price: 400,
};

let output = `The cost of ${product.item} is ${product.price} rupees.`;
console.log(output);

*/

// let sentence = `This is a special string ${1+2+3+4}`;
// console.log(sentence);


// ---escape charecters---

// console.log("Rishav\nSinha");
// console.log("Rishav\tSinha");
// console.log("Rishav\tSinha");

// let lower = "rishav";
// console.log(lower.toUpperCase());

// let upper = "RISHAV";
// console.log(upper.toLowerCase());


// let college = "      Rishav Sinha "
// console.log(college.trim());


// let place = "Hindustan"
// let how = "Beautiful"
// console.log(place.slice(2,7));
// console.log(place.concat(how));

// console.log(place.replace("stan", " = India"));

// console.log(place.charAt(5));



// Qs

let input = prompt("Write your user name: ");
let size = input.length;
console.log("@"+ input + size);
