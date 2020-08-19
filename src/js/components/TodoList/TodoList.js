import React from 'react'
import mockJSON from '../../json/MOCK_DATA.json';
import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

export default function TodoList( props ) {
  let allItems = mockJSON.map(object => {
    return(
      <TodoItem key={object.id} checked={object.completed} for={`todo-item-${object.id}`} label={object.label}/>
    )
  })

  let currentItems;
  if ( props.viewing === 'complete') {
    currentItems = allItems.filter( item => item.props.checked===true )
  } else {
    currentItems = allItems.filter( item => item.props.checked===false )
  }

  return (
    <>
      <TodoForm />
      <ul id="todo-list" className="todo-list">
        { currentItems }
      </ul>
    </>
  )
}
