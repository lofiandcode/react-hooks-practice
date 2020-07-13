import React from 'react';
import Counter from './components/Counter/Counter';
import BouncingBalls from './components/BouncingBalls/BouncingBalls';
import './App.css';

function App() {

  return (
    <div className="App">
      <BouncingBalls />
      <Counter />
    </div>
  );
}

export default App;
