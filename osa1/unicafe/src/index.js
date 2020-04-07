import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}  
  </button>
)

const Statistics = props => {
  if (props.all > 0)
  {
    return (
      <div>
        <h2>statistics</h2>
        <Statistic text = 'good' value = {props.good}/>
        <Statistic text = 'neutral' value = {props.neutral}/>
        <Statistic text = 'bad' value = {props.bad}/>
        <Statistic text = 'all' value = {props.all}/>
        <Statistic text = 'average' value = {props.average}/>
        <Statistic text = 'positive' value = {props.positive} unit = {'%'}/> 
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </div>
  )
}

const Statistic = props => {
    return (
      <div>
        <p>{props.text} {props.value} {props.unit}</p>
      </div>
    )
  }

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
    setAverage((good + 1 - bad) / (all + 1));
    setPositive(100 * (good + 1) / (all + 1));
    setAll(all + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAverage((good - bad) / (all + 1));
    setPositive(100 * good / (all + 1));
    setAll(all + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
    setAverage((good - bad - 1) / (all + 1));
    setPositive(100 * good / (all + 1));
    setAll(all + 1);
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all} average = {average} positive = {positive}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)