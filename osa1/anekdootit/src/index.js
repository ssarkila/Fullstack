import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}  
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(props.anecdotes.length).fill(0));
  const [max, setMax] = useState(0)

  const handleVoteClick = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);

    let maxPoints = 0;
    let maxIndex = 0;

    for (let i = 0; i < points.length; i++)
    {
      let tempPoints = points[i];

      if (i === selected)
      {
        tempPoints++;
      }

      if (tempPoints > maxPoints)
      {
        maxPoints = points[i];
        maxIndex = i; 
      }
    }

    setMax(maxIndex);
  }

  const handleNextClick = () => {
    const randomized = Math.floor(Math.random() * (anecdotes.length));
    console.log(randomized);
    setSelected(randomized);
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button onClick={handleVoteClick} text='vote' />
      <Button onClick={handleNextClick} text='next anecdote' />
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[max]}</p>
      <p>has {points[max]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)