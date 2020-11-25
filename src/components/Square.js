import React from 'react'
import ReactTooltip from 'react-tooltip'
import classes from './Square.module.css'

const Square = ({ date, contributions }) => {
  const tooltipText = `${date
    .toISOString()
    .slice(0, 10)} (${contributions} contributions)`

  const color = `rgba(56, 108, 62, ${contributions / 15})`

  return (
    <div
      data-tip={tooltipText}
      className={classes.Square}
      style={{ backgroundColor: color }}
    >
      <ReactTooltip />
    </div>
  )
}

export default Square
