import React, {useState} from 'react'
import TaskDate from './TaskDate'
import './Task.css'

const Task = ( props ) => {

  const milliDelay = 1000;

  const checkDate = () => {
    return props.date instanceof Date && !isNaN(props.date);
  }
  const isValidDate = checkDate();

  const checkboxHandler = () => {
    setTimeout(function() {
      props.onChecked(props.key);
    }, milliDelay)
  }


  return (
    <div className='task--view'>

      <div className='task-view'>
          <input type="checkbox" className="task-check" onChange={checkboxHandler}/>
          <h1>{props.title}</h1>
      </div>
      <div></div>
      { isValidDate
      ?
      <TaskDate date={props.date}/>
      :
      <p></p>
      }

    </div>

  )
}

export default Task