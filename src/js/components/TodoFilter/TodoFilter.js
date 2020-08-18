import React from 'react'
import Button from '../Button/Button'

export default function TodoFilter() {
  const testerIncomplete = () => {
    console.log('show completed clicked')
  }

  return (
    <section>
      <header>
        <h4>To Do Filter</h4>
      </header>
      <div>
        <Button title="Show Completed" classes="button--primary" action={ testerIncomplete } />
      </div>
    </section>
  )
}
