import React,{useState} from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const updateName = () => {
        setName("Rishav");
    }


    const [age, setAge] = useState(0);
    const updateAge = () => {
        setAge(25);
    }

    const [count, increaseCount] = useState(0);
    const increaseNum = () => {
        increaseCount(count + 1);
    }

    const [isStudent, SetIsStudent] = useState(false);
    const toggleStudentStatus = () => {
        SetIsStudent(!isStudent);
    }


    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p>Count: {count}</p>
            <button onClick={increaseNum}>Counting</button>
            <p>Is Student: {isStudent ? "Yes" : "No"}</p>
            <button onClick={toggleStudentStatus}>Check Student</button>
        </div>
    );
}

export default MyComponent