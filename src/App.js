import './App.css';
import React from 'react';
import Calculator from './components/calculator';
import Fetchquote from './components/FetchApi';

const App = () => (
  <div className="container">
    <header className="title">
      <h1>Math Magicians</h1>
    </header>
    <Fetchquote />
    <Calculator />
  </div>
);

export default App;
