import React from 'react'
import './TaskBar.css'

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