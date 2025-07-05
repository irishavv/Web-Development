// Conditional Statement


// if and if-else condition

let age = 19;

if(age >= 18){
    console.log("You can vote");
}else{
    console.log("You can't vote");
}


// other example

let mode = "dark";
let color;

if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white";
}

console.log(color);


// odd even number example


let nums = 17;

if(nums % 2 === 0){
    console.log(nums, "This Is even Number");
}else{
    console.log(nums, "This is Odd number");
}



// Ternary Operator --- its work on 3  operator
// condition ? true output: false output

// let Nage = 25;
let Nage = 13;
let result = Nage >= 18 ? "adult" : "not adult";
console.log(result);




// MDN Docs 