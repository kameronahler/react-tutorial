import React from 'react';
import TodoItem from '../TodoItem/TodoItem'

function Todo() {
  return (
    <section>
      <header>
        <h3>To Do List</h3>
      </header>
      <ul>
        <TodoItem
          todoProps={{status: 'false', label: 'Item 1'}}
        />
        <TodoItem
          todoProps={{status: 'false', label: 'Item 2'}}
        />
        <TodoItem
          todoProps={{status: 'false', label: 'Item 3'}}
        />
      </ul>
    </section>
  )
}

export default Todo
