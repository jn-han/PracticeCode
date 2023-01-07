import React from 'react'
import './TaskBar.css'
import {BrowserRouter, Route, Link} from 'react-router-dom';

const TaskBar = (props) => {
  return (
    <div className='taskBar'>
        {props.items.map((sortType) =>
          <p>{sortType}</p>
        )}
      </div>
  )
}

export default TaskBar