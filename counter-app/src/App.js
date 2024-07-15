import { useState, React } from 'react';
import './App.css';
import Confetti from 'react-confetti'

function App() {

  let [readcounter, setCounter] = useState(0)
  let forIncreaseCounter = () => {
    if (readcounter >= 0 && readcounter < 10) {
      setCounter(readcounter + 1);
    }
    else {
      alert('Counter is 10');

    }
  }
  let forDecreaseCounter = () => {
    if (readcounter > 0) {
      setCounter(readcounter - 1)
    }
    else {
      alert(`Counter is 0`)
    }
  }
  return (
    <div className='mainDiv'>
      <h1> Counter App </h1>
      {readcounter == 10 &&
        <Confetti
          width={1500}
          height={1000}
        />

      }
      <p id='counter'> {readcounter} </p>
      <button onClick={forIncreaseCounter}>Increase</button>
      <button onClick={forDecreaseCounter}>Decrease</button>
    </div>
  );
}

export default App;
