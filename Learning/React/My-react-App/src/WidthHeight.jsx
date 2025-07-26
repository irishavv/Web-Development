import React, { useState, useEffect } from "react";



function WidthHeight() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event count");

        return() => {
            window.removeEventListener("resize",handleResize);
            console.log("Event count removed");
        }
    },[])
    window.addEventListener("resize", handleResize);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return(
        <>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
        </>
    );
}

export default WidthHeight