import React from 'react';

function TodoItem(props) {
  return(
    <li>
      <input data-check={props.todoProps.status} type="checkbox" />
      <label>{props.todoProps.label}</label>
    </li>
  )
}

export default TodoItem
