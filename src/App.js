import React, { useEffect, useState } from 'react'
import './App.css'
import Graph from './components/Graph'
import TodayForm from './components/TodayForm'
import CategoryManager from './components/CategoryManager'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState({})

  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    },
  }
  const getData = () => {
    axios
      .get(
        'https://life-contribution-graph.firebaseio.com/categories.json',
        config
      )
      .then((response) => setData(response.data))
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='App'>
      <CategoryManager data={data} />
      <Graph data={data} />
      <TodayForm data={data} />
    </div>
  )
}

export default App
