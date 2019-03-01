import React from 'react';
import './Button.css';

function NumberButton(props){
  if (props.num === '0'){
    return(<h3>{props.num}</h3>);
  }

  return(
    <h2>{props.num}</h2>
  );
}

export default NumberButton;
