import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleResetClick = () => {
    setCounter(0);
  };

  const handlePlusClick = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter(prev => prev + 3);
  };

  const handleMinusClick = () => {
    if (counter < 1) {
      return alert('STOP CLICKING BY MINUS');
    }
    setCounter(prev => prev - 1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <div className={s.flex}>
          <button onClick={handleMinusClick} className='btn'>
            minus
          </button>
          <button className='btn' onClick={handleResetClick}>
            reset
          </button>
          <button className='btn' onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
