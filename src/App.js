import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(3);
  const [plaintext, setPlaintext] = useState('');
  const [ciphertext, setCiphertext] = useState('');

  const handleIncrease = () => {
    setNumber(number + 1);
    setCiphertext(applyCaesarCipher(plaintext, number + 1));
  };

  const handleDecrease = () => {
    setNumber(number - 1);
    setCiphertext(applyCaesarCipher(plaintext, number - 1));
  };

  const handlePlaintextChange = (event) => {
    const plaintext = event.target.value;
    setPlaintext(plaintext);
    const ciphertext = applyCaesarCipher(plaintext, number);
    setCiphertext(ciphertext);
  };

  function applyCaesarCipher(text, shift) {
    return text
      .split('')
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const isUpperCase = code >= 65 && code <= 90;
          const baseCharCode = isUpperCase ? 65 : 97;
          const shiftedCode = ((code - baseCharCode + shift) % 26) + baseCharCode;
          return String.fromCharCode(shiftedCode);
        }
        return char;
      })
      .join('');
  }

  return (
    <div className="App">
      <h1 id='title'>Caesar cipher</h1>
      <div className="container">
        <h1 className='b-28'>Plaintext</h1>
        <textarea name="input" placeholder="Enter your text here" required value={plaintext} onChange={handlePlaintextChange} />
        <div className='field-number'>
          <button className='btn' id='down' onClick={handleDecrease}>-</button>
          <span>{number}</span>
          <button className='btn' id='up' onClick={handleIncrease}>+</button>
        </div>
        <h1 className='b-28'>Ciphertext</h1>
        <textarea name="output" placeholder="Output text will appear here" value={ciphertext} readOnly />
      </div>
    </div>
  );
}

export default App;
