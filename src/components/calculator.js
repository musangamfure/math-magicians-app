import React, { useState } from 'react';
import { IoMdHappy } from 'react-icons/io';
import calculate from '../Logic/Calculate';
import Button from './Button';
import './styles/calculator.css';

const Calculator = () => {
  const [result, setResult] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const clickEvent = (buttonName) => {
    const { total, next, operation } = result;
    const solution = calculate({ total, next, operation }, buttonName);
    setResult({
      total: solution.total,
      next: solution.next,
      operation: solution.operation,
    });
  };
  const { total, next, operation } = result;
  return (
    <section className="main-div">
      <div>
        <p className="calc-title">
          Lets do some math!
          <IoMdHappy />
        </p>
      </div>
      <div className="calc-grid">
        <div className="output">
          <div className="previous-operand">
            {next ? total : operation || ''}
          </div>
          <div className="current-operand">{next || total}</div>
        </div>
        <Button name="AC" className="" clickEvent={clickEvent} />
        <Button name="+/-" className="" clickEvent={clickEvent} />
        <Button name="%" className="" clickEvent={clickEvent} />
        <Button name="÷" className="side-color" clickEvent={clickEvent} />
        <Button name="1" className="" clickEvent={clickEvent} />
        <Button name="2" className="" clickEvent={clickEvent} />
        <Button name="3" className="" clickEvent={clickEvent} />
        <Button name="+" className="side-color" clickEvent={clickEvent} />
        <Button name="4" className="" clickEvent={clickEvent} />
        <Button name="5" className="" clickEvent={clickEvent} />
        <Button name="6" className="" clickEvent={clickEvent} />
        <Button name="x" className="side-color" clickEvent={clickEvent} />
        <Button name="7" className="" clickEvent={clickEvent} />
        <Button name="8" className="" clickEvent={clickEvent} />
        <Button name="9" className="" clickEvent={clickEvent} />
        <Button name="-" className="side-color" clickEvent={clickEvent} />
        <Button name="0" className="span-2" clickEvent={clickEvent} />
        <Button name="." className="" clickEvent={clickEvent} />
        <Button name="=" className="side-color" clickEvent={clickEvent} />
      </div>
    </section>
  );
};

export default Calculator;
