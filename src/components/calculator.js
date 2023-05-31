import React, { useState } from 'react';
import calculate from '../Logic/Calculate';
import Button from './Button';
import './calculator.css';

function Calculator() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  function clickEvent(buttonName) {
    const solution = calculate({ total, next, operation }, buttonName);
    setTotal(solution.total);
    setNext(solution.next);
    setOperation(solution.operation);
  }

  return (
    <div className="calc-container">
      <div className="output">
        <div className="previous-operand">{next ? total : operation || ''}</div>
        <div className="current-operand">{next || total}</div>
      </div>
      <Button name="AC" className="" clickEvent={() => clickEvent('AC')} />
      <Button name="+/-" className="" clickEvent={() => clickEvent('+/-')} />
      <Button name="%" className="" clickEvent={() => clickEvent('%')} />
      <Button
        name="÷"
        className="side-color"
        clickEvent={() => clickEvent('÷')}
      />
      <Button name="1" className="" clickEvent={() => clickEvent('1')} />
      <Button name="2" className="" clickEvent={() => clickEvent('2')} />
      <Button name="3" className="" clickEvent={() => clickEvent('3')} />
      <Button
        name="+"
        className="side-color"
        clickEvent={() => clickEvent('+')}
      />
      <Button name="4" className="" clickEvent={() => clickEvent('4')} />
      <Button name="5" className="" clickEvent={() => clickEvent('5')} />
      <Button name="6" className="" clickEvent={() => clickEvent('6')} />
      <Button
        name="x"
        className="side-color"
        clickEvent={() => clickEvent('x')}
      />
      <Button name="7" className="" clickEvent={() => clickEvent('7')} />
      <Button name="8" className="" clickEvent={() => clickEvent('8')} />
      <Button name="9" className="" clickEvent={() => clickEvent('9')} />
      <Button
        name="-"
        className="side-color"
        clickEvent={() => clickEvent('-')}
      />
      <Button name="0" className="span-2" clickEvent={() => clickEvent('0')} />
      <Button name="." className="" clickEvent={() => clickEvent('.')} />
      <Button
        name="="
        className="side-color"
        clickEvent={() => clickEvent('=')}
      />
    </div>
  );
}

export default Calculator;
