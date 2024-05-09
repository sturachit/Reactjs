//2) Take 2 buttons one for increment & another for decrement & take one default counter 0.

import React, { useState } from 'react';

const Question3 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const css ={
    color : 'red',
    fontSize : '20px',
    fontFamily : 'cursive'
}

    const button ={
        marginTop :"10px",
        marginRight :"10px",
        color:"#008B8B",
        backGroundColor :"#2F4F4FF",
        border : " solid #008B8B",
        width :"100px",
        height: "30px",

    }
  return (
    <div>
      <h2 style={css}>Increment & Decrement</h2>
      <h3>Count: {count}</h3>
      <button style={button}  onClick={increment}>Increment</button>
      <button style={button} onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Question3;
