// The change in the state of an object in known as an Event
// Events are fired to notify code of "Iteresting changes" that may effect the code execution.

// > Mouse Event (click, double click, etc....)
// > Keyboard events (keypress, keyup , keydown)
// > Form events (Submit etc.)
// > Print event & many more.

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("button was clicked");
    let a = 77;
    a++;
    console.log(a);
}

let box = document.querySelector("div");
box.onmouseover = () => {
    console.log('You are inside the div');
}


let btn2 = document.querySelector("#eve");

btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}


// Event Listners----------------------

// node.addEventListener(event,callback)

let btn3 = document.querySelector("#btn2");

btn3.addEventListener("click", () => {
    console.log("btn3 was clicked *** 1");
})

btn3.addEventListener("click", () => {
    console.log("btn3 was clicked *** 2");
})

btn3.addEventListener("click", () => {
    console.log("btn3 was clicked *** 3");
})

const handler4 = () => {
    console.log("btn3 was clicked *** 4");
}

btn3.addEventListener("click", handler4);

btn3.addEventListener("click", () => {
    console.log("btn3 was clicked *** 5");
})

// node.removeEventListener(event, callback)

btn3.removeEventListener("click" , handler4);