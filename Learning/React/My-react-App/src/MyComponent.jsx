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



    const [oldName, newName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function updateNewName(event){
        newName(event.target.value);
    }

    function handleQueantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChnage(event) {
        setShipping(event.target.value);
    }


    const [car, setCar] = useState({year: 2025, make: "Tata", model:"Range Rover"});

    function handleYearChange(event){
        // updater here is use not using original name we use other name for safe
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
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
            <br />
            <br />

            <input value={oldName} onChange={updateNewName}/>
            <p>Name: {oldName}</p>

            <input value={quantity} onChange={handleQueantityChange} type='number' />
            <p>Quantity: {quantity}</p>


            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instruction'/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>

            <p>Payment: {payment}</p>



            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChnage} />
                Pick up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChnage} />
                Delivery
            </label>

            <p>Shipping: {shipping}</p>

            <br />
            <br />

            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} /><br />
            <input type="text" value={car.make} onChange={handleMakeChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange} /><br />
        </div>
    );
}

export default MyComponent