import { useState } from "react";

function Button() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log("OUCH!");
    };

    const handleClick2 = (name) => {
        console.log(`${name}, stop clicking me!`);
    };

    const handleClick3 = (name) => {
        if (count < 3) {
            setCount(count + 1);
            console.log(`${name}, you clicked me ${count + 1} time(s).`);
        } else {
            console.log(`${name}, stop clicking me!`);
        }
    };

    const handleClick4 = (e) => {
        e.target.textContent = "OUCH!";
    };

    return (
        <>
            <button className="button" onClick={handleClick}>
                Click Me
            </button>

            <button className="button" onClick={() => handleClick2("Bro")}>
                Hit Here
            </button>

            <button className="button" onClick={() => handleClick3("Bro")}>
                Hit Me
            </button>

            <button className="button" onClick={handleClick4}>
                New Hit Me
            </button>
        </>
    );
}

export default Button;
