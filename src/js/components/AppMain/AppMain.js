import React from 'react';
import './AppMain.scss';
import TodoList from '../TodoList/TodoList';

export default function AppMain() {
  return (
    <main className="app-main">
      <header>
        <h1>AppMain</h1>
      </header>
      <TodoList />
    </main>
  )
}
