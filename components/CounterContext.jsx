import React, { createContext, useState, useContext } from "react";
// this is example of counter where we use context

// creating the context with initial state
const CountContext = createContext(null);

// creating the provider
const CountContextProvider = ({ children }) => (
  <CountContext.Provider value={useState(11)}>{children}</CountContext.Provider>
);

// component - getting state from context
const Counter = () => {
  const [count] = useContext(CountContext);
  return (
    <div className="box">
      <h1>{count}</h1>
    </div>
  );
};

// component - getting function from context
const AddBtn = () => {
  const [, setCount] = useContext(CountContext);
  return (
    <div className="box">
      <button onClick={() => setCount((v) => v + 1)}>Add</button>
    </div>
  );
};

const CounterContext = () => {
  return (
    <div className="box">
      <CountContextProvider>
        Counter with Props
        <Counter />
        <AddBtn />
      </CountContextProvider>
    </div>
  );
};

export default CounterContext;
