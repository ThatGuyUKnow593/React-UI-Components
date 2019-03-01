import React from 'react';
import './Button.css';

function NumberButton(props){
  if (props.num === '0'){
    return(<h5>{props.num}</h5>);
  }

  return(
    <h4>{props.num}</h4>
  );
}

export default NumberButton;
