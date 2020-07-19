import React from 'react';

function TodoItem(props) {
  return(
    <li>
      <input status={props.status} type="checkbox" />
      <label>{props.label}</label>
    </li>
  )
}

export default TodoItem
