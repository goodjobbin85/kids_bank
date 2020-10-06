import React from 'react';

const Student = (props) => {
  return (
    <ul>
      <li>{props.name}</li>
      <li>{props.email}</li>
      <li>{props.allowance}</li>
      <li>{props.balance}</li>
    </ul>
  )
}

export default Student;
