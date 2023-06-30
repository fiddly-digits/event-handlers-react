//import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Less</button>
    </>
  );
}

export default App;
