// importing useState
import React, { useState } from "react";
import './Counter.scss'

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
      <div className="startGameContainer" >
        <button >Start Game</button>
        <button>Reset Game</button>
      </div>
    </div>
  );
};

export default Counter;
