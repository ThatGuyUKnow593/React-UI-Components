import React from 'react';
import './App.css';

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div>
      <CalculatorDisplay />

      <div className='nums'>
        <NumberButton num="9" />
        <NumberButton num="8" />
        <NumberButton num="7" />
        <NumberButton num="6" />
        <NumberButton num="5" />
        <NumberButton num="4" />
        <NumberButton num="3" />
        <NumberButton num="2" />
        <NumberButton num="1" />
        <NumberButton num="0" />
      </div>

      <div className='actions'>
        <ActionButton value="clear" />
        <ActionButton value="/" />
        <ActionButton value="X" />
        <ActionButton value="-" />
        <ActionButton value="+" />
        <ActionButton value="=" />
      </div>

    </div>
  );
};

export default App;
