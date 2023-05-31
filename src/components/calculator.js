import React from 'react';
import './calculator.css';

function Calculator() {
  return (
    <div className="calc-container">
      <div className="output">
        <div className="previous-operand">200 ÷</div>
        <div className="current-operand">10</div>
      </div>
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="side-color">
        ÷
      </button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="side-color">
        +
      </button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="side-color">
        *
      </button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="side-color">
        -
      </button>
      <button type="button" className="span-2">
        0
      </button>
      <button type="button">.</button>
      <button type="button" className="side-color">
        =
      </button>
    </div>
  );
}

export default Calculator;
