import React from 'react'

const Button = ({ name, onClick, text }) => (
  <button name = {name} onClick={onClick}>
    {text}  
  </button>
)

export default Button