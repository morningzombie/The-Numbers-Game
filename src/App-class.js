import React, { useState } from 'react';
import './App.css';
import Message from './Message';

export default function App() {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    // console.log("clicked")
    setCount(count + 1)
  };
  return (
    <div onClick={handleClick}>
      {/* <p>wow clicked {props.count} times</p> */}
      <Message count={count} />
    </div>
  );
}

