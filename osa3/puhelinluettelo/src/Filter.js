import React from 'react'
import PropTypes from 'prop-types'

const Filter = props => {
  return (
    <div>
            filted shown with: <input
        value={props.searchName}
        onChange={props.handleSearhName}/>
    </div>
  )
}

Filter.propTypes = {
  searchName: PropTypes.string,
  handleSearhName: PropTypes.func
}

export default Filter