import React, { useState } from "react";
// this is example of counter with props drilling

// component - display the count value
const Counter = ({ count }) => {
  return (
    <div className="box">
      <h1>{count}</h1>
    </div>
  );
};

// component - event handler for function
const AddBtn = ({ setCount }) => {
  return (
    <div className="box">
      <button onClick={() => setCount((v) => v + 1)}>Add</button>
    </div>
  );
};

// component - with initial state and components
const CounterProps = () => {
  const [count, setCount] = useState(12);

  return (
    <div className="box">
      Counter with Props
      <Counter count={count} />
      <AddBtn setCount={setCount} />
    </div>
  );
};

export default CounterProps;
