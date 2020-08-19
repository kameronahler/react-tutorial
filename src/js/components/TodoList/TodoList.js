import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import mockJSON from '../../json/MOCK_DATA.json';
import './TodoList.scss';
import '../TodoItem/TodoItem.scss'

export default function TodoList() {

  // state
  const [ filterMode, setFilterMode ] = useState( 'incomplete' )
  const [ newItemValue, setNewItemValue ] = useState( '' )
  const [ allItems, setAllItems ] = useState( mockJSON.map(object => {
    return (
      <TodoItem
        key={object.id}
        checked={object.completed}
        for={`todo-item-${object.id}`}
        label={object.label} />
    )
  }))


  // filter
  const toggleFilter = () => {
    setFilterMode( filterMode === 'incomplete' ? 'complete' : 'incomplete' )
  }
  let displayButton;
  if ( filterMode === "incomplete" ) {
    displayButton = <button onClick={ toggleFilter }>Show completed</button>
  } else {
    displayButton = <button onClick={ toggleFilter }>Hide completed</button>
  }


  // viewing items
  let viewingItems;
  if ( filterMode === 'incomplete') {
    viewingItems = allItems.filter( object => object.props.checked===false )
  } else {
    viewingItems = allItems.filter( object => object.props.checked===true )
  }


  // form
  const userInput = e => {
    setNewItemValue(e.currentTarget.value)
  }
  const addItem = e => {
    e.preventDefault();

  }


  // render
  return (
    <section>
      <header>
        <h3>To Do List</h3>
      </header>
      { displayButton }

      <form onSubmit = { addItem }>
        <label htmlFor = 'todo-input'>Add to do</label>
        <input onChange = { userInput } value = { newItemValue } id = 'todo-input' type = 'text'/>
        <input type = 'submit' value = 'Add'/>
      </form>

      <ul id = 'todo-list' className='todo-list'>
        { viewingItems }
      </ul>
    </section>
  )
}
