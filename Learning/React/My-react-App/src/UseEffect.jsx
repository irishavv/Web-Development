import React, { useState, useEffect } from "react";


function UseEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("Green");

    // 1. useEffect(() =>{})   ---> Runs after every re-render
    // 2. useEffect(() =>{},[])  ---> Runs only on mount (one time)
    // 3. useEffect(() =>{},[value])  ---> Run on mount + when value is changed

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    },[count,color]);

    // [] due to this it will update one time tile - after } , [] we write this

    function addCount(){
        setCount(c => c + 1);
    }
    
    
    function subtractCount(){
        setCount(c => c - 1);
    }


    function changeColor() {
        setColor(col => col === "Green" ? "Red" : "Green");
    }



    return(
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br /><br />
        <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default UseEffect;
