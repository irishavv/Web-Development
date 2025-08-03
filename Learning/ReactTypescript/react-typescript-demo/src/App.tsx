import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import './App.css';


function App() {
  const personName = {
    first: 'Rishav',
    last: 'Kumar'
  };

  const nameList = [
    {
      first: 'Rishav',
      last: 'Kumar'
    },
    {
      first: 'Rajesh',
      last: 'Singh'
    },
    {
      first: 'Anand',
      last: 'Gupta'
    }
  ];

  return (
  <>
    <div className="App">
      <Greet name="Rishav" messagesCount={29} isLoggedIn={true} />
      <Greet name="Rishav" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>

    <Container
      style={{ border: '1px solid black', padding: '1rem' }}
    />
  </>
);

}

export default App;
