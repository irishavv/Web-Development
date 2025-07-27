import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import ColorPicker from "./ColorPicker";
import ListUpdate from "./ListUpdate";
import CarList from "./CarList";
import UseEffect from "./UseEffect";
import WidthHeight from "./WidthHeight";
import React from "react";
import ComponentA from "./ComponentA";
import ComponentUR from "./ComponentUR";


function App() {
  return (
    <>
      <Header />
      <ComponentUR/>
      <ComponentA />
      <WidthHeight />
      <UseEffect />
      <CarList />
      <ListUpdate />
      <ColorPicker />
      <MyComponent />
      <Counter />
      <List />
      <UserGreeting isLoggedIn={true} username="i_rishavv" />
      <Student name="Rishav Kumar" age={25} isStudent={true} />
      <Student name="Rajiv Singh" age={30} isStudent={false} />
      <Student name="Ankit Patel" age={12} isStudent={true} />
      <Student name="Kartik Aryan" age={43} isStudent={false} />
      <Student />
      <Food />
      <Button />
      <Card />
      <Card />


      <Footer />
    </>
  );
}

export default App
