import React, { useState } from 'react';
import Food from './Food';
import { element } from 'prop-types';


function ListUpdate() {
    const [computer, setComputer] = useState(["Monitor", "Mouse", "Keyboard"]);

    function handleAddComputer() {
        const newComponent = document.getElementById("computerInput").value;
        document.getElementById("computerInput").value="";

        setComputer(comp => [...comp,newComponent]);
    }

    function handleRemoveComputer(index){

        // setComputer(computer.filter((element,i) => i !== index)); //we replace element by writing _, it is sort form
        setComputer(computer.filter((_,i) => i !== index));
    }



    return (
        <div>
            <h2>List of Computer Components</h2>
            <ul>
                {computer.map((computer,index) => <li key={index} onClick={() => handleRemoveComputer(index)}>{computer}</li>)}
            </ul>

            <input type="text" id= "computerInput" placeholder='Enter Component Name' />
            <button onClick={handleAddComputer}>Add Component</button>
        </div>
    );
}

export default ListUpdate