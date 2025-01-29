import { useRef } from 'react';
import CustomInput from './CustomInput';

function UseRefForwardRefExample() {
  const refs = {
    ref1: useRef(null),
    ref2: useRef(null),
  };
  const focusInput = () => {
    if (refs.ref1.current) {
      refs.ref1.current.focus();
    }
  };

  return (
    <div>
      <h2>React.forwardRef Example</h2>
      <CustomInput ref={refs} placeholder='Enter the text...' />

      <button onClick={focusInput}>Set focus on input</button>
    </div>
  );
}

export default UseRefForwardRefExample;
