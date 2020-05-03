import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ id, name, onClick, text }) => (
  <button id = {id} name = {name}  onClick={onClick}>
    {text}
  </button>
)

Button.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string
}

export default Button