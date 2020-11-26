import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CategoryManager = ({ data }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      name: name,
      description: description,
      color: color,
    }
    axios
      .post(
        'https://life-contribution-graph.firebaseio.com/categories.json',
        data
      )
      .then(() => {
        setName('')
        setDescription('')
        setColor('')
      })
  }
  useEffect(() => {
    console.log(data)
  })
  return (
    <div>
      <input type='checkbox' />
      <label>Multiview/Condensed activity view</label>

      <h1>All Categories</h1>

      {Object.keys(data).map((key) => {
        return (
          <>
            <input type='checkbox' />
            <label>{data[key].name}</label>
          </>
        )
      })}
      <h1>New Category</h1>
      <form>
        <label>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description</label>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Color</label>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={submitHandler}>Create</button>
      </form>
    </div>
  )
}

export default CategoryManager
