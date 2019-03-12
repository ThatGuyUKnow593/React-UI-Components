import React from 'react';
import './Header.css';

function HeaderTitle(props){
  let mainName = props.firstName + ' ' + props.lastName;
  let atName = props.firstName + '' + props.lastName;

  let n = '26 jan';

  return (
    <div className='name'>
      <h3>{mainName}</h3>
      <h4>@{atName}</h4>
      <h5>{n}</h5>
    </div>
  );
}

export default HeaderTitle;
