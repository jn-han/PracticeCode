import React, { useState } from 'react'

const GradeForm = ( props ) => {

    const [assignmentName, setAssignmentName] = useState('');
    const [currentGrade, setCurrentGrade] = useState('');
    const [weightedGrade, setWeightedGrade] = useState('');


    const assignmentNameHandler = (e) => {
        setAssignmentName(e.target.value);
    }

    const currentGradeHandler = (e) => {
        setCurrentGrade(e.target.value);
    }

    const weightedGradeHandler = (e) => {
        setWeightedGrade(e.target.value);

    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newAssignment = {
            assignmentName: assignmentName,
            currentGrade: currentGrade,
            weightedGrade: weightedGrade
        }

        setAssignmentName('');
        setCurrentGrade('');
        setWeightedGrade('');
         
        props.onSaveAssignmentData(newAssignment);
    }

  return (
    <form onSubmit={submitHandler}>
        <input type='text' onBlur={assignmentNameHandler}></input>
        <input type='text' onBlur={currentGradeHandler}></input>
        <input type='text' onBlur={weightedGradeHandler}></input>
        <button type='submit'>submit me</button>
        
    </form>

  )
}

export default GradeForm