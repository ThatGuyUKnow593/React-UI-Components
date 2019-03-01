import React from 'react';
import './Button.css';

function ActionButton(props){
  if(props.value === 'clear'){
    return(
      <h3>{props.value}</h3>
    )
  }

  return(
    <h2>{props.value}</h2>
  );
}

export default ActionButton;
