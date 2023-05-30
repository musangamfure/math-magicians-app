import './App.css';
import React from 'react';
import Calculator from './components/calculator';

const App = () => (
  <div className="container">
    <header className="title">
      <h1>Math Magicians</h1>
    </header>
    <Calculator />
  </div>
);

export default App;
