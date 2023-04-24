import React, { createContext, useReducer, useContext } from "react";
// this is similar example to context counter, but with useReducer instead of useState

// reducer function for useReducer
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "subtrack":
      return state - 1;
    default:
      return state;
  }
};

// creating the context with initial state
const CountContext = createContext(null);

// creating the provider
const CountContextProvider = ({ children }) => (
  <CountContext.Provider value={useReducer(reducer, 10)}>
    {children}
  </CountContext.Provider>
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
  const [, dispatch] = useContext(CountContext);
  return (
    <div className="box">
      <button onClick={() => dispatch({type: "add"})}>Add</button>
    </div>
  );
};

// component - getting function from context
const SubBtn = () => {
    const [, dispatch] = useContext(CountContext);
    return (
      <div className="box">
        <button onClick={() => dispatch({type: "subtrack"})}>Subtrack</button>
      </div>
    );
  };
  
  



const CounterContextReducer = () => {
  return (
    <div className="box">
      <CountContextProvider>
        Context and Reducer
        <Counter />
        <AddBtn />
        <SubBtn />
      </CountContextProvider>
    </div>
  );
};

export default CounterContextReducer;
