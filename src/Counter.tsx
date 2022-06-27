import React, { useState } from 'react';

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setvalue] = useState<number>(initialValue);
  
  const increment = () => {
    setvalue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setvalue((prevState) => prevState - 1);
  };

  return (
  <div>
    <div>value: {value}</div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
  </div>
  );
};

export default Counter;