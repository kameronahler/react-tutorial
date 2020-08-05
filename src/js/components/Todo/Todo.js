import React from 'react';
import TodoItemFunction from '../TodoItemFunction/TodoItemFunction';
import mockJSON from './MOCK_DATA.json';
import './Todo.scss';

function Todo() {
  const generateItems = mockJSON.map(mockData => {
    return(
      <TodoItemFunction key={mockData.id} checked={mockData.completed} label={mockData.label}/>
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
