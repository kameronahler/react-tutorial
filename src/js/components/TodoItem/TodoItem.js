import React, { useState } from 'react'
import './TodoItem.scss'

function TodoItem(props) {
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
        id={ props.for }
        onChange={ checkboxChange }
        type={ 'checkbox' }
      />{' '}
      <label htmlFor={ props.for }> { props.label } </label>{' '}
    </li>
  )
}

export default TodoItem
