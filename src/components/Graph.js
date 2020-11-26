import React from 'react'
import Square from './Square'
import classes from './Graph.module.css'

const Graph = () => {
  const START_DATE = new Date(2018, 1, 1) // date of account creation
  const END_DATE = new Date() // today's date

  let allDays = []
  for (let d = START_DATE; d <= END_DATE; d.setDate(d.getDate() + 1)) {
    allDays.push(new Date(d))
  }

  let allSquares = allDays
    .map((day) => (
      <Square
        key={day}
        date={day}
        contributions={Math.floor(Math.random() * Math.floor(15))}
      />
    ))
    .slice(allDays.length - 365)

  // Credit: some dude on stackoverflow
  const dayToSplice = (n) => 7 - ((n + 6) % 7)

  const first_day = allDays[0].getDay()
  allSquares = allSquares.splice(
    dayToSplice(first_day),
    allSquares.length - first_day
  )

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
