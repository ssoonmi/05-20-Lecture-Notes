import React, { useState } from 'react';

function useMergeState(initialState) {
  const [stateVar, setStateFunc] = useState(initialState);
  const newSetStateFunc = (nextState) => {
    return setStateFunc({ ...stateVar, ... nextState });
  };
  return [stateVar, newSetStateFunc];
}

function Example() {
  // Declare a new state variable, which we'll call "count"
  // const countArr = useState(0);
  // const count = countArr[0];  
  // const setCount = countArr[1];  
  const [count, setCount] = useState(0);
  const [hello, setHello] = useMergeState({ hello: 'world', other: 'value' });
  // setHello({
  //   hello: "WORLD!!!!"
  // }); 
  // {
  //   hello: "WORLD!!!!",
  //   other: 'value'
  // }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;