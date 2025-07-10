// Fetch API --> Application Programming Interface
// the fetch API provides an interface for fetching(sending/receiving) resources.

const URL = "https://jsonplaceholder.typicode.com/posts";
const titledata = document.querySelector("#title");
const btn = document.querySelector("#btn");



// let promise = fetch(URL,[options])---- this is a way to write


const getFacts = async () => {
    console.log("Getting Data....");
    let response = await fetch(URL);
    // console.log(response.status);
    console.log(response);  //JSON format
    let data = await response.json();
    titledata.innerText = data[2].title;
}


/*
// above same work we can do by using promise chain
// below is also right but for understanding purpose it is very hard

function getFacts() {
    fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        titledata.innerText = data[2].title;
    });
}
    
*/

btn.addEventListener("click",getFacts);
// Understanding Terms-------
// AJAX is Asynchronous JS & XML --- (this is old way,before modern JS)
// JSON is Javascript object Notation 
// AJAJ




// HTTP Verbs -------
// Response status code

// Refer MDN documentation for more info    
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods