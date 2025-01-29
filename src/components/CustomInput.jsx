import { forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  console.log(ref);
  return <input ref={ref.ref1} {...props} />;
});

CustomInput.displayName = 'CustomInput';

export default CustomInput;
