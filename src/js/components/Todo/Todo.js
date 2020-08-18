import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import mockJSON from './MOCK_DATA.json';
import './Todo.scss';

export default function Todo() {
  let incompleteItems = [];
  let completeItems = [];
  let allItems = mockJSON.map(object => {
    return(
      <TodoItem key={object.id} checked={object.completed} for={`todo-item-${object.id}`} label={object.label}/>
    )
  });

  const delineateItems = () => {
    allItems.forEach( item => {
      if (item.props.checked) {
        completeItems.push(item);
      } else {
        incompleteItems.push(item);
      }
    })
  };

  delineateItems();

  return (
    <section>
      <header>
        <h3>To Do List</h3>
      </header>
      <ul className="todo-list">
        {incompleteItems}
      </ul>
    </section>
  )
}
