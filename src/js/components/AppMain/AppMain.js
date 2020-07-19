import React from 'react';
import './AppMain.scss';
import Todo from '../Todo/Todo';

function AppMain() {
  return (
    <main className="app-main">
      <header>
        <h1>AppMain</h1>
      </header>
      <Todo />
    </main>
  )
}

export default AppMain
