import React from 'react'

const Button = ({ id, name, onClick, text }) => (
  <button id = {id} name = {name}  onClick={onClick}>
    {text}  
  </button>
)

export default Button