import React, { useEffect, useState } from 'react'
import './App.css'
import Graph from './components/Graph'
import { contributionHistory, categories } from './data/data'

const App = () => {
  return (
    <div className='App'>
      <Graph data={contributionHistory} categories={categories} />
    </div>
  )
}

export default App
