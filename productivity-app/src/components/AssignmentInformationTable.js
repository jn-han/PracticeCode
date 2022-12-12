import React from 'react'
import { useState } from 'react'
import NewAssignment from './NewAssignment'

const AssignmentInformationTable = ( props ) => {
  const [average, setAverage] = useState(0);
  let items = props.items;

  const calculateAverage = () => {
    let sumCurrentGrade = 0;
    let totalAssignments = 0;

    console.log(typeof(props.items[0].currentGrade));

    for(let i = 0; i < props.items.length; i++) {
      if (parseInt(props.items[i].currentGrade) != 0) {
        sumCurrentGrade = parseInt(props.items[i].currentGrade);
        totalAssignments++;
      }
    }

    console.log(sumCurrentGrade)
    console.log(totalAssignments)
    console.log(sumCurrentGrade/totalAssignments)

    setAverage (sumCurrentGrade / totalAssignments)

    return average;
  } 

  
  const newAssignmentHandler = (updatedAssignment) => {
    let item = {...items[parseInt(updatedAssignment.id)]}
    item = updatedAssignment;
    items[parseInt(updatedAssignment.id)] = item;
    
    console.log(parseInt(updatedAssignment.id))
    props.updateAssignmentList(items);
    

  } 


  const submitHandler = (e) => {
    e.preventDefault();
 

    
  }

  return (
    <div>
        {props.items.map( grades => (
           <NewAssignment
            newAssignmentHandler={newAssignmentHandler}
            key={grades.id}
            id={grades.id}
            assignmentName={grades.assignmentName}
            currentGrade={grades.currentGrade}
            weightedGrade={grades.weightedGrade}
            />
        ))}
      <button onClick={submitHandler}>Hello</button>
      <h2>Current Grade: {average}</h2>
      <button onClick={calculateAverage}>avg</button>
    </div>

  )
}

export default AssignmentInformationTable