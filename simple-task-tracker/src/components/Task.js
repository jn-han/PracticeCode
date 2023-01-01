import React from 'react'
import TaskDate from './TaskDate'
import './Task.css'

const Task = ( props ) => {
  return (
    <div className='task--view'>

      <div className='task-view'>
          <input type="checkbox" className="task-check"/>
          <h1>{props.title}</h1>
      </div>
      <TaskDate date={props.date}/>
    </div>

  )
}

export default Task