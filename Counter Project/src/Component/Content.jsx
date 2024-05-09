// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


export default function Content() {
   // State for the counter
   const [counter, setCounter] = useState(5);

   // Function to handle increment
   const handleIncrement = () => {
     setCounter((prevCounter) => prevCounter + 5);
   };

   // Function to handle decrement
   const handleDecrement = () => {
     setCounter((prevCounter) => Math.max(prevCounter - 5));
   };

   // useEffect to log the counter value whenever it changes
   useEffect(() => {
     console.log(`Counter value changed: ${counter}`);
   },  [counter]);

  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
      <h1>Counter: {counter}</h1>
        <button className="btn btn-st3 me-2" onClick={handleIncrement}>Increment</button>
        <button className="btn btn-st3" onClick={handleDecrement}>Decrement</button>
      </Typography>
    </Paper>
  );
}
