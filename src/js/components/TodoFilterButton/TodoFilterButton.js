import React, { useState } from 'react'

export default function Button(props) {
  return (
    <>
      <button className={`button ${ props.classes }`} onClick={ props.action }>{ props.title }</button>
    </>
  )
}