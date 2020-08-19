import React, { useState } from 'react'

export default function TodoForm() {
  const [ value, setValue] = useState('')
  const [ buttonDisabled, setButtonDisabled] = useState(true)

  const checkForText = e => {
    if (e.currentTarget.value) {
      setValue(e.currentTarget.value)
      setButtonDisabled(false)
    } else {
      setValue(null)
      setButtonDisabled(true)
    }
  }

  const addItem = e => {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={ addItem }>
        <label htmlFor="todo-input">Add to do</label>
        <input onChange={ checkForText } value={ value } id="todo-input" type="text"/>
        <input type="submit" value="Add" disabled={ buttonDisabled }/>
      </form>
    </>
  )
}
