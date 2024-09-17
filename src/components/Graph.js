import React from 'react'
import classes from './Graph.module.css'
import GraphDay from './GraphDay'

const Graph = ({ data, categories }) => {
  const graphDays = data.map((day) => (
    <GraphDay data={day} key={Math.random()} />
  ))
  return <div className={classes.Graph}>{graphDays}</div>
}

export default Graph
