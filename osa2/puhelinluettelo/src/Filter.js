import React from 'react'

const Filter = props => {
    return (
        <div>
            filted shown with: <input 
                value={props.searchName}
                onChange={props.handleSearhName}/>
        </div>
    )
  }

export default Filter;