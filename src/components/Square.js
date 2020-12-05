import React from 'react'
import classes from './Square.module.css'

const Square = ({ data, color }) => {
  const hex2rgb = (h) => {
    if (h[0] === '#') {
      h = h.slice(1)
    }
    if (h.length <= 3) {
      h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
    }
    h = parseInt(h, 16)
    return [(h >> 16) & 255, (h >> 8) & 255, h & 255]
  }
  const rgb = hex2rgb(color)
  const squareColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${
    data.amount / 10
  })`

  const style = { backgroundColor: squareColor }
  return (
    <div className={classes.Square} style={style}>
      {/* {JSON.stringify(data)} */}
    </div>
  )
}

export default Square
