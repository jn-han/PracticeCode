import React from 'react'
import { useState } from 'react'
import NewAssignment from './NewAssignment'
import './AssignmentInformationTable.css'

const AssignmentInformationTable = ( props ) => {
  const [average, setAverage] = useState(0);
  const [currentGrade, setCurrentGrade] = useState(0);
  let items = props.items;

  const updateAssignmentName = (assignmentName, id) => {
    items[id].assignmentName = assignmentName;
  } 

  const updateCurrentMark = (currentMark, id) => {
    items[id].currentGrade = currentMark;
  }

  const updateGradeWeight = (gradeWeight, id) => {
    items[id].weightedGrade = gradeWeight;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let sumAssignmentGrades = 0;
    let totalAssignments = 0;
    let totalWeight = 0;
    let variableWeight = 0;
  
    props.updateAssignmentList(items);


    for(let i = 0; i < items.length; i++) {
      if(parseInt(items[i].currentGrade) != 0 && parseInt(items[i].weightedGrade) != 0){
        variableWeight += (parseInt(items[i].currentGrade) * parseInt(items[i].weightedGrade));
        totalAssignments++;
        sumAssignmentGrades += parseInt(items[i].currentGrade);
        totalWeight += parseInt(items[i].weightedGrade);
      }
    }
    setAverage(parseFloat(sumAssignmentGrades / totalAssignments).toFixed(2))
    setCurrentGrade(parseFloat(variableWeight / totalWeight).toFixed(2));
  }

  const addAssignmentHandler = () => {
    const newAssignment = {
      assignmentName: '',
      currentGrade: 0,
      weightedGrade: 0,
      id: items.length,
    }

    props.addNewAssignment(newAssignment);


  }

  return (
    <div className='infoTable'>
      <div className='titles'>
        <p className='assignmentNameTitle'>Assignment Name</p>
        <p className='markTitle'>Mark</p>
        <p className='weightTitle'>Weight</p>
      </div>
        {props.items.map( grades => (
           <NewAssignment
            key={grades.id}
            id={grades.id}
            updateAssignmentName={updateAssignmentName}
            updateCurrentMark={updateCurrentMark}
            updateGradeWeight={updateGradeWeight}
            assignmentName={grades.assignmentName}
            currentGrade={grades.currentGrade}
            weightedGrade={grades.weightedGrade}
            />
        ))}
      <button className='calculateBtn' onClick={submitHandler}>Calculate!</button>
      <br></br>
      <button className='calculateBtn' onClick={addAssignmentHandler}>Add Another Assignment</button>
      <h2>Average Assignment Grade: {average}</h2>
      <h2>Current Grade: {currentGrade}</h2>

    </div>

  )
}

export default AssignmentInformationTable