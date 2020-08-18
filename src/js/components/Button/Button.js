import React, { useState } from 'react'

export default function Button(props) {
  const [ title, setTitle ] = useState(props.title)
  const [ classes, setClasses ] = useState(props.classes)

  return (
    <>
      <button className={`button ${ classes }`} onClick={ props.action }>{ title }</button>
    </>
  )
}
