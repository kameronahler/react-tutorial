import React from 'react';
import './TodoItem.scss';

function TodoItem(props) {
  if (props.completed) {
    return(
      <li className={"todo-item todo-item--completed"}>
        <input defaultChecked type="checkbox" />
        <label>{props.label}</label>
      </li>
    )
  } else {
    return(
      <li className={"todo-item"}>
        <input type="checkbox" />
        <label>{props.label}</label>
      </li>
    )
  }
}

export default TodoItem
