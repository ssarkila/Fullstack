import React from 'react'

const Filter = props => {
    return (
        <div>
            find countries: <input 
                value={props.searchName}
                onChange={props.handleSearhName}/>
        </div>
    )
  }

export default Filter;