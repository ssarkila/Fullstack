import React from 'react'
import PropTypes from 'prop-types'

const PersonForm = props => {
  return (
    <form>
      <div>
          name: <input
          value={props.newName}
          onChange={props.handleNameChange}/>
      </div>
      <div>
          number: <input
          value={props.newNumber}
          onChange={props.handleNumberChange}/>
      </div>
      <div>
        <button onClick={props.addPerson} type="submit">add</button>
      </div>
    </form>
  )
}

PersonForm.propTypes = {
  newName: PropTypes.string,
  newNumber: PropTypes.string,
  handleNameChange: PropTypes.func,
  handleNumberChange: PropTypes.func,
  addPerson: PropTypes.func
}

export default PersonForm