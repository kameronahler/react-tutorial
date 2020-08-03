import React from 'react';
import './TodoItem.scss';

class TodoItem extends React.Component {
  render() {
    return (
      <li className={`todo-item ${ (this.props.completed) ? "todo-item--completed" : null }`}>
        <input
          className={"todo-item__checkbox"}
          type={"checkbox"}
          defaultChecked={this.props.completed}
        />
        <label>{this.props.label}</label>
      </li>
    )
  }
}

export default TodoItem
