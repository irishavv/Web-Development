import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";

function App() {
  return (
    <>
      <Header />
      <List />
      <UserGreeting isLoggedIn={true} username="i_rishavv"/>
      <Student name="Rishav Kumar"  age = {25} isStudent={true} />
      <Student name="Rajiv Singh"  age = {30} isStudent={false} />
      <Student name="Ankit Patel"  age = {12} isStudent={true} />
      <Student name="Kartik Aryan"  age = {43} isStudent={false} />
      <Student />
      <Food />
      <Button />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Footer />
    </>
  );
}

export default App
