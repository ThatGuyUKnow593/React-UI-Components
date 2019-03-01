import React from 'react';
import './App.css';

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div>
      <CalculatorDisplay />
        <div className='topRow'>
          <ActionButton value="clear" id="clear" />
          <ActionButton value='/' />
        </div>
        <div className='secondRow'>
          <NumberButton num='7' />
          <NumberButton num='8' />
          <NumberButton num='9' />
          <ActionButton value='X' />
        </div>
        <div className='thirdRow'>
          <NumberButton num="4" />
          <NumberButton num="5" />
          <NumberButton num="6" />
          <ActionButton value='-' />
        </div>
        <div className='fourthRow'>
          <NumberButton num="3" />
          <NumberButton num="2" />
          <NumberButton num="1" />
          <ActionButton value="+" />
        </div>
        <div className='fifthRow'>
          <NumberButton num='0' />
          <ActionButton value="=" />
        </div>
    </div>
  );
};

export default App;
