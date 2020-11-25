import React from 'react'
import Square from './Square'
import classes from './Graph.module.css'

const Graph = () => {
  const START_DATE = new Date(2018, 1, 1) // date of account creation
  const END_DATE = new Date() // today's date

  var allDays = []
  for (let d = START_DATE; d <= END_DATE; d.setDate(d.getDate() + 1)) {
    allDays.push(new Date(d))
  }

  const allSquares = allDays
    .map((day) => (
      <Square
        key={day}
        date={day}
        contributions={Math.floor(Math.random() * Math.floor(15))}
      />
    ))
    .slice(900, -1)

  return (
    <div className={classes.Graph}>
      <div className={classes.GraphDays}>
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
      </div>
      <div className={classes.GraphGrid}>{allSquares}</div>
    </div>
  )
}

export default Graph
