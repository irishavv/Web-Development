// console.log("Rishav Sinha");

// console.log(); -- print 
// console.dir(); ---- document --- its print method/properties console.dir(windows.documents)---window is object .


//DOM Manipulation
// 1. Selecting with id---- document.getElementById("myId"); --- same as below
// 1. Selecting with class---- document.getElementByClassName("myclass"); -- same as below
// 1. Selecting with tag---- let heading =  document.getElementByTagName("p"); ------ console.dir(heading),console.log(heading)


// Query Selector is the best selector -- better way
// document.querySelector("myId/myClass/tag");
// let elements = document.querySelector(".P"); /// return first element

// let allElement = document.querySelectorAll(".p");   // return a nodeList
// console.dir(allElement);



// Properties--------------------   use all properties like  ______.tagName   ----(___ here write node name like div)
// tagName : return tag for element nodes
// innerText : return the text content of the element and all its children
// innerHTML : returns the plain text of HTML contents in the elements
// textContent: return textual content even for hidden elements..


// Q1 

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// //  change the text 
// h2.innerHTML = h2.innerText + " I am a students";
// console.dir(h2.innerText);



// Q2

// let divs = document.querySelectorAll(".box");
// console.log(divs);

// console.log(divs[0]);

// divs[0].innerText = "New Value 1";
// divs[1].innerText = "New Value z";
// divs[2].innerText = "New Value 3";

// with for loop

// for(let i = 0; i< divs.length; i++){
//     divs[i].innerText = `new unique value ${i}`;
// }

// Attributes 

// getAttribute(attr) ----- to get the attribute value ---- 
// let dev = document.querySelector("div");
// console.log(dev);

// setAttribute(attr, value) ------ //to set the attribute val th
// let para = document.querySalector("p");
// console.log(para.setAttribute("class" , "newClass"));


// Style 

// node.style-------

// let div =  document.querySelector("div")
// div.style.backgroundColor = "Green";
// div.style.fontSize = "25px";
// div.innerText = "Hello!"   // it is for changing the inner text of div


// Insert Elements -------- // let newBtn = document.createElement("button")
// this ca i apply at any where where need to do such thingh like creating and placing text, button, etc..


// node.append(el) ------- //adds at the end of node (inside)
        // newBtn.innerText = "Click me!";
        // let div = document.querySelector("div");
        // div.append(newBtn);
// node.prepend(el) ------ //adds at the start of node (inside)
        // div.prepend(newBtn);
// node.before(el) ------- //adds before the node (outside)
        // div.before(newBtn);
// node.after(el) ------- // adds after the node(outside)
        // div.after(newBtn);



// Delete Element   ---------------------

// node.remove() //removes the node  ----



// Q--

// let para = document.querySelector("p");
// para.setAttribute("class", "main");   // dont use this because when you do this you will loss the style and effect from that articular part (css)

// instent of this use below one

// para.classList.add("main");
