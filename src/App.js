import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input)); // Evaluate the expression
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput(''); // Clear the input
    } else {
      setInput(input + value); // Append the clicked value
    }
  };

  return (
    <div className="App">
      <h1>Calculatrice</h1>
      <div className="calculator">
        <input
          type="text"
          value={input}
          readOnly
          className="display"
        />
        <div className="keypad">
          {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/', 'C'].map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
