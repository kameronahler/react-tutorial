import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import mockJSON from './MOCK_DATA.json';
import './Todo.scss';

function Todo() {
  const generateItems = mockJSON.map(mockData => {
    return(
      <TodoItem key={mockData.id} checked={mockData.completed} for={`todo-item-${mockData.id}`} label={mockData.label}/>
    )
  });

  return (
    <section>
      <header>
        <h3>To Do List</h3>
      </header>
      <ul className="todo-list">
        {generateItems}
      </ul>
    </section>
  )
}

export default Todo
