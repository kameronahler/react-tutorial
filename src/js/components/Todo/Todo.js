import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import mockJSON from './MOCK_DATA.json';

function Todo() {
  const generateItems = mockJSON.map(mockObject => {
    return(
      <TodoItem key={mockObject.id} status={mockObject.status} label={mockObject.label}/>
    )
  })
  return (
    <section>
      <header>
        <h3>To Do List</h3>
      </header>
      <ul>
        {generateItems}
      </ul>
    </section>
  )
}

export default Todo
