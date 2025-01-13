import s from './Counter.module.css';

export const Counter = () => {
  const handleResetClick = name => {
    console.log(`Hello ${name}!`);
  };

  const handlePlusClick = e => {
    console.log('Plus was clicked!');
    console.log(e);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <div className={s.flex}>
          <button onClick={() => console.log('React is awesome!!!')} className='btn'>
            minus
          </button>
          <button className='btn' onClick={() => handleResetClick('Alex')}>
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
