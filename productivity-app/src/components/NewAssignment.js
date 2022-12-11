import React from 'react'
import GradeForm from './GradeForm'

const NewAssignment = ( props ) => {

    const onSaveAssignmentData = (enteredAssignmentData) => {
        const assignmentData = {
            ...enteredAssignmentData,
            id: Math.random().toString(),
        }
        props.onAddAssignment(assignmentData);
    } 

    return (
       <GradeForm onSaveAssignmentData={onSaveAssignmentData}/>
    )
}

export default NewAssignment