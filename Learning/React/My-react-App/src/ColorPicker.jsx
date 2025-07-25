import { func } from 'prop-types';
import React,{useState} from 'react';

function colorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChnage(event) {
        setColor(event.target.value);
    }

    return(
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Select Color: {color}</p>
            </div>

            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChnage} />
        </div>
    );
}

export default colorPicker;