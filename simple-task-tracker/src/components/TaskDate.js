import React from 'react'

const TaskDate = ( props ) => {
    const month = props.date.toLocaleString('en-us', {month: 'long'});
    const day = props.date.toLocaleString('en-us', {day: '2-digit'});
    const year = props.date.getFullYear();

  return (
        <div className="">
            <div className="">{month}</div>
            <div className="">{year}</div>
            <div className="">{day}</div>
        </div>
  )
}

export default TaskDate