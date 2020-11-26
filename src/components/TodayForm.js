import React, { useEffect } from 'react'
import classes from './TodayForm.module.css'
import axios from 'axios'

const TodayForm = ({ data }) => {
  const handleChange = (e) => {
    const newValue = e.target.value
    axios.post(
      `https://life-contribution-graph.firebaseio.com/categories/${e.target.dataset.id}.json`,
      { logs: newValue }
    )
  }
  const checkboxes = Object.keys(data).map((key) => {
    return (
      <div>
        <label>{data[key].name}</label>
        <input
          data-id={data[key].name}
          type='checkbox'
          onChange={handleChange}
        />
      </div>
    )
  })
  return (
    <div className={classes.TodayForm}>
      <form>
        <h1>What did you do today?</h1>
        {checkboxes}
      </form>
    </div>
  )
}

export default TodayForm
