import React, { useState } from 'react'
import './TodoItemFunction.scss'

function TodoItemFunction(props) {
  const [ stateChecked, setStateChecked ] = useState(props.checked);
  const checkboxChange = e => { setStateChecked(e.currentTarget.checked) }

  return (
    <li
      className={`"todo-item ${
        stateChecked ? 'todo-item--completed' : null
      }`}
    >
      <input
        className={ 'todo-item__checkbox' }
        defaultChecked={ stateChecked }
        onChange={ checkboxChange }
        type={ 'checkbox' }
      />{' '}
      <label> {props.label} </label>{' '}
    </li>
  )
}

export default TodoItemFunction
