import React from 'react'

const Total = props => {
    return (
      <div>
          <b>total of exercises {props.parts.reduce((acc, part) => acc + part.exercises, 0)}</b>
      </div>
    )
  }

export default Total;