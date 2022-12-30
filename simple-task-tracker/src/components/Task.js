import React from 'react'
import TaskDate from './TaskDate'
import './Task.css'

const Task = ( props ) => {
  return (
    <div>
        <h1>{props.title}</h1>
    </div>
  )
}

export default Task