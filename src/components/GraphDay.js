import React from 'react'
import Square from './Square'
import classes from './GraphDay.module.css'
import { categories } from '../data/data'

const GraphDay = ({ data }) => {
  const squares = data.contributions.map((c) => (
    <Square
      data={c}
      color={categories.find((categ) => categ.name == c.name).color}
      key={Math.random()}
    />
  ))

  const style = {
    backgroundColor:
      data.date.getDay() === 0 || data.date.getDay() === 6
        ? 'rgba(0, 0, 0, 0.04)'
        : 'white',
  }
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const dayName = days[data.date.getDay()]

  let monthName = '.'
  if (data.date.getDate() === 1) {
    monthName = monthNames[data.date.getMonth()]
  }

  const getWeekNumber = (thisDate) => {
    const onejan = new Date(thisDate.getFullYear(), 0, 2)
    return Math.ceil(((thisDate - onejan) / 86400000 + onejan.getDay()) / 7)
  }
  let weekNumber = '.'
  if (data.date.getDay() === 1) {
    weekNumber = getWeekNumber(data.date)
  }

  return (
    <div className={classes.GraphDay} style={style}>
      <p>{monthName}</p>
      <p>{dayName}</p>
      <p>{weekNumber}</p>
      <p>{data.date.getDate()}</p>
      <div className={classes.GraphDaySquares}>{squares}</div>
    </div>
  )
}

export default GraphDay
