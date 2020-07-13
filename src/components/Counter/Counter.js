// importing useState
import React, { useState } from "react";

const Counter= (props) => {
  // state declaration holding [value, updateFunction]
  const [counter, setCounter] = useState(0);

  // component render
  return (
    <div className="counterContainer">
      {/* lets display our state in a p tag */}
      <p>{counter}</p>

      {/* lets provide a button to update our state */}
      <button onClick={() => setCounter(previousCount => previousCount + 1)}>
        Count
      </button>
      
    </div>
  );
};

export default Counter;
