import React, { useState } from 'react'
import './TodoItem.scss'

export default function TodoItem(props) {
  const [ checked, setChecked ] = useState(props.checked);
  const checkboxChange = e => { setChecked(e.currentTarget.checked) }

  return (
    <li
      className={`"todo-item ${
        checked ? 'todo-item--completed' : null
      }`}
    >
      <input
        className={ 'todo-item__checkbox' }
        defaultChecked={ checked }
        id={ props.for }
        onChange={ checkboxChange }
        type={ 'checkbox' }
      />
      <label htmlFor={ props.for }> { props.label } </label>{' '}
    </li>
  )
}
