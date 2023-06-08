import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import FetchApi from './components/FetchApi';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<FetchApi />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
