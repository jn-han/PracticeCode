import React from 'react'
import './TaskDate.css'

const TaskDate = ( props ) => {
    const month = props.date.toLocaleString('en-us', {month: 'long'});
    const day = props.date.toLocaleString('en-us', {day: '2-digit'});
    const year = props.date.getFullYear();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayOfWeek = weekday[props.date.getDay()]

  return (
        <div className='dateView'>
            <div className="">{dayOfWeek}	&#8226; {month} {day}, {year} </div>
        </div>
  )
}

export default TaskDate