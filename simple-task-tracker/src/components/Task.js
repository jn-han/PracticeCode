import React from 'react'
import TaskDate from './TaskDate'
import './Task.css'

const Task = ( props ) => {
  return (
    <div className='task-display'>
        <h2>{props.title}</h2>
        <TaskDate date={props.date} ></TaskDate>
    </div>
  )
}

export default Task