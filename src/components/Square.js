import React, { useEffect } from 'react'
import ReactTooltip from 'react-tooltip'
import classes from './Square.module.css'

const Square = ({ date, contributions }) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]
  const tooltipText = `${date
    .toISOString()
    .slice(0, 10)} (${contributions} contributions)`

  const color = `rgba(56, 108, 62, ${contributions / 15})`
  const showProperties = () => {
    console.log(date, contributions)
    console.log(date.getDay())
    console.log(date.getDate())
  }
  useEffect(() => {
    if (date.getDay() === 0 && date.getDate() <= 7) {
      document.getElementById(date).innerHTML = `<span class=${classes.Month}>${
        monthNames[date.getMonth()]
      }</span>`
    }
  })

  return (
    <div
      // data-tip={tooltipText}
      className={classes.Square}
      style={{ backgroundColor: color }}
      onClick={showProperties}
      id={date}
    >
      {/* <ReactTooltip /> */}
    </div>
  )
}

export default Square
