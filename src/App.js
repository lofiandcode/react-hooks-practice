import React, { useState } from 'react';
import Counter from './components/Counter/Counter';
import BouncingBalls from './components/BouncingBalls/BouncingBalls';
import './App.css';

function App() {

  return (
    <div className="App">
      <BouncingBalls className="ballContainer" />
      <Counter 
        className="counter" 
      />
    </div>
  );
}

export default App;
