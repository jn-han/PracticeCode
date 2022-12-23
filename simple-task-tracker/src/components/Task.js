import React from 'react'
import TaskDate from './TaskDate'

const Task = ( props ) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <TaskDate date={props.date} ></TaskDate>
    </div>
  )
}

export default Task