import React from 'react'
import TaskDate from './TaskDate'
import './Task.css'

const Task = ( props ) => {
  return (
    <div className='task--box'>
        <p className='task--title'>{props.title}</p>
    </div>
  )
}

export default Task