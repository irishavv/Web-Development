import React, { useRef, useEffect } from 'react';

function ComponentUR() {
    const ref = useRef(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
        console.log("inputRef1:", inputRef1);
        console.log("inputRef2:", inputRef2);
        console.log("inputRef3:", inputRef3);
    });

    function resetBackgrounds() {
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick1() {
        ref.current++;
        console.log(ref.current);
        resetBackgrounds();
        inputRef1.current?.focus();
        inputRef1.current.style.backgroundColor = "yellow";
    }

    function handleClick2() {
        ref.current++;
        console.log(ref.current);
        resetBackgrounds();
        inputRef2.current?.focus();
        inputRef2.current.style.backgroundColor = "yellow";
    }

    function handleClick3() {
        ref.current++;
        console.log(ref.current);
        resetBackgrounds();
        inputRef3.current?.focus();
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return (
        <>
            <button onClick={handleClick1}>Click me1!</button>
            <input ref={inputRef1} />

            <button onClick={handleClick2}>Click me2!</button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>Click me3!</button>
            <input ref={inputRef3} />
        </>
    );
}

export default ComponentUR;



// import React, { useRef, useEffect } from 'react';

// function ComponentUR() {
//     const ref = useRef(0);
//     const inputRef1 = useRef(null);
//     const inputRef2 = useRef(null);
//     const inputRef3 = useRef(null);

//     useEffect(() => {
//         console.log("Component Rendered");
//         console.log("inputRef1:", inputRef1);
//         console.log("inputRef2:", inputRef2);
//         console.log("inputRef3:", inputRef3);
//     });

//     function handleClick1() {
//         ref.current++;
//         console.log(ref.current);
//         inputRef1.current?.focus();
//         inputRef1.current.style.backgroundColor = "yellow";

//         inputRef2.current.style.backgroundColor = "";
//         inputRef3.current.style.backgroundColor = "";
//     }

//     function handleClick2() {
//         ref.current++;
//         console.log(ref.current);
//         inputRef2.current?.focus();
//         inputRef2.current.style.backgroundColor = "yellow";

//         inputRef1.current.style.backgroundColor = "";
//         inputRef3.current.style.backgroundColor = "";
//     }

//     function handleClick3() {
//         ref.current++;
//         console.log(ref.current);
//         inputRef3.current?.focus();
//         inputRef3.current.style.backgroundColor = "yellow";

//         inputRef1.current.style.backgroundColor = "";
//         inputRef2.current.style.backgroundColor = "";
//     }

//     return (
//         <>
//             <button onClick={handleClick1}>Click me1!</button>
//             <input ref={inputRef1} />

//             <button onClick={handleClick2}>Click me2!</button>
//             <input ref={inputRef2} />

//             <button onClick={handleClick3}>Click me3!</button>
//             <input ref={inputRef3} />
//         </>
//     );
// }

// export default ComponentUR;






