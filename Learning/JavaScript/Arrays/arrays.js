// let marks = [87,85,83,93,95];
// console.log(marks);
// console.log("length of marks is: " + marks.length);

// let student = ["Rishav" , "PG" , 8.7];   //it is not good way to create an arrays
// console.log(student);

// let family = ["Father","Mother", "Sister","Brother", "Son"];
// console.log(family);
// console.log("length of marks is: " + family.length);


// array is also object which i special,  it store index and value 

// console.log(marks[3]);
// console.log(marks[1]);
// console.log(marks[4]);
// console.log(marks[0]);
// console.log(marks[2]);


// marks[1] = 99;
// console.log(marks); 


// looping

// for(let i = 0; i < marks.length; i++){
//     console.log(marks[i]);
// }

// for(let el of family){
//     console.log(el);
// }

// for(let el of marks){
//     console.log(el);
// }

// Q average of marks

// let marks = [85,97,44,37,76,60];
// let size = marks.length;
// let sum = 0;
// for(let i = 0; i < marks.length; i++){
//     sum = sum + marks[i];
// }

// let avg = sum/size;

// console.log(`Average marks of the class = ${avg}`);



// Q
/*

let items = [250,645,300,900,50];
for(let i = 0; i < items.length; i++){
    // items[i] = items[i] - (items[i]/10);
    let offer = items[i]/10;
    items[i] = items[i]-offer;
}
console.log(items);

*/

// Arrays Methods
// Push(): add to end
// Pop(): delete from end & return
// toString(): converts arrays to string



// let foodItems = ["Patato", "Mango","Apple","Lichi"];
// console.log(foodItems);
// foodItems.push("chips");
// console.log(foodItems);
// foodItems.push("burger","Paneer","Litti");
// console.log(foodItems);

// foodItems.pop();
// console.log(foodItems);

// // change arrays into string

// console.log(foodItems.toString());  //it will not change in original , it will create new and return that..


// Concat: joins multiple arrays & return result
// unshift(): add to start
// shift(): 

// let heros = ["Yash","Akashay","Hritik"];
// let heroine = ["Deepika","Priyanka","Kriti"];
// let movies = ["Krish","KGF","Welcome"];

// let actors = heros.concat(heroine,movies);
// console.log(actors);
// // console.log(actors.toString());

// actors.unshift("Rishav");  //add words from start
// console.log(actors);

// actors.shift();  //delete from start
// console.log(actors);



// // Slice(): return a piece of the array--->   slice(startidx,endidx);
// console.log(actors.slice(2,4));
// console.log(actors.slice(2));

// Splice(): change original array(add,remove, replace);
// splice(startidx , delcount,newEl);

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// arr.splice(2,2,101,102);
// console.log(arr);

// add Element
// arr.splice(2,0,101,104,108);

// Delete element
// arr.splice(3,1);

// Replace Element
// arr.splice(3,1,101);




// Qs. 

let companie = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companie.shift());
console.log(companie);

companie.splice(1,1,"Ola");
console.log(companie);

companie.push("Amazon");
console.log(companie);