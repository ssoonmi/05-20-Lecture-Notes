import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default Example;

function Example(props) {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    
    // Will run when unmounting component and when the count updates
    return () => {
      
    };
  }, [count]); // Only re-run the effect if count changes

  useEffect(() => {
    // componentDidMount
    async function fetchWhatever() {
      //...
    }

    fetchWhatever();

    return () => {
      // componentWillUnmount
      document.title = `You finished clicking ${count} times`;
    }
  }, []);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Link to="/">Unmount</Link> 
    </div>
  );
}