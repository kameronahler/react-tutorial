import React from 'react';
import './TodoItem.scss';

class TodoItem extends React.Component {
  render() {
    if (this.props.completed) {
      return(
        <li className={"todo-item todo-item--completed"}>
          <input defaultChecked type="checkbox" />
          <label>{this.props.label}</label>
        </li>
       )
    } else {
      return(
        <li className={"todo-item"}>
          <input type="checkbox" />
          <label>{this.props.label}</label>
        </li>
      )
    }
  }
}

export default TodoItem
