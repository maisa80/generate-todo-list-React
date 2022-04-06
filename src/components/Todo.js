import React from 'react'

function Todo({todo, handleClick, className}) {
  return (
    <li onClick={handleClick} className={className}>{todo.task}</li>
  )
}

export default Todo