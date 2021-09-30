import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.innerText));
  };
  const multiply = () => {
    setResult(result.concat('*'));
  };

  const resetHandler = () => {
    setResult('');
  };
  const backspaceHandler = () => {
    setResult(result.slice(0, -1));
  };
  const equal = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div className='container'>
      {/* <form className='screen'>
        <input type='text' value={result} />
      </form> */}
      <div className='above'></div>
      <div className='screen'>{result}</div>
      <span className='btn btn-grey' onClick={resetHandler}>
        AC
      </span>
      <span className='btn btn-grey btn-backspace' onClick={backspaceHandler}>
        &#8592;
      </span>
      <span className='btn btn-orange' onClick={handleClick}>
        /
      </span>
      <span className='btn' onClick={handleClick}>
        7
      </span>
      <span className='btn' onClick={handleClick}>
        8
      </span>
      <span className='btn' onClick={handleClick}>
        9
      </span>
      <span className='btn btn-orange' onClick={multiply}>
        &times;
      </span>

      <span className='btn' onClick={handleClick}>
        4
      </span>
      <span className='btn' onClick={handleClick}>
        5
      </span>
      <span className='btn' onClick={handleClick}>
        6
      </span>
      <span className='btn btn-orange' onClick={handleClick}>
        -
      </span>

      <span className='btn' onClick={handleClick}>
        1
      </span>
      <span className='btn' onClick={handleClick}>
        2
      </span>
      <span className='btn' onClick={handleClick}>
        3
      </span>
      <span className='btn btn-orange' onClick={handleClick}>
        +
      </span>

      <span className='btn btn-zero' onClick={handleClick}>
        0
      </span>
      <span className='btn' onClick={handleClick}>
        .
      </span>
      <span className='btn btn-orange equal' onClick={equal}>
        =
      </span>
    </div>
  );
};

export default Calculator;
