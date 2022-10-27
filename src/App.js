import { useState } from 'react';
import './App.css';

const names = ['Juan', 'Arthur', 'Damian','Gustavo', 'Gerly', 'Cassandra', 'Corwin',
  'Jacques', 'Ainis', 'Gianna', 'Emily', 'Fanessa', 'Adi',
  'Mido', 'Cari', 'Eddie', 'Captain Ed', 'Nick', 'Tyler',
  'Todd', 'Brad']

function App() {
  
  const [myName, setMyName] = useState('Todd')
  const [counter, setCounter] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {myName} is pretty damn cool.
        </p>
        {names.map(name => (
          <button key={name} onClick={() => setMyName(name)}>{name}</button>
        ))}
        <p>You clicked the button {counter} times.</p>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
