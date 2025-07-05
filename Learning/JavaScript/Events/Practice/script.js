let CCbtn1 = document.querySelector("#btn1");
let currbutn = "light";



// CCbtn1.addEventListener("click" , () => {
//     if(currbutn === "light"){
//         currbutn = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         currbutn = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }

//     console.log(currbutn);
// });

let body = document.querySelector("body");

CCbtn1.addEventListener("click" , () => {
    if(currbutn === "light"){
        currbutn = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currbutn = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currbutn);
});
