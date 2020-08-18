import React, { useState } from 'react';
import TodoFilterButton from '../TodoFilterButton/TodoFilterButton';
import TodoList from '../TodoList/TodoList';

export default function Todo() {
  const [ viewing, setViewing ] = useState("incomplete")
  const updateViewing = () => {
    if ( viewing === 'complete' ) {
      setViewing('incomplete')
    } else {
      setViewing('complete')
    }
  }

  let whichButton;
  if ( viewing === "incomplete" ) {
    whichButton = <TodoFilterButton title="Show completed" classes="button--primary" action={ updateViewing } />
  } else {
    whichButton = <TodoFilterButton title="Hide completed" classes="button--primary" action={ updateViewing } />
  }

  return (
    <section>
      <header>
        <h3>To Do List</h3>
      </header>

      <div>{ whichButton }</div>

      <TodoList viewing={ viewing } />
    </section>
  )
}
