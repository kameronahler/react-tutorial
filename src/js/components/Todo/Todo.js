import React from 'react';
import TodoItem from '../TodoItem/TodoItem'

function Todo() {
  return (
    <section>
      <header>
        <h2>AppMain</h2>
      </header>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </section>
  )
}

export default Todo
