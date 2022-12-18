import React, { useState } from 'react'

const NewAssignment = ( props ) => {
    const [assignmentName, setAssignmentName] = useState(props.assignmentName);
    const [currentMark, setCurrentMark] = useState(props.currentGrade);
    const [gradeWeight, setGradeWeight] = useState(props.currentMark);
    
    const assignmentNameHandler = (e) => {
        setAssignmentName(e.target.value)
        updateAssignment();
    }

    const currentMarkHandler = (e) => {
        setCurrentMark(parseInt(e.target.value));
        updateAssignment();

    }

    const gradeWeightHandler = (e) => {
        setGradeWeight(parseInt(e.target.value));
        updateAssignment();
    }

    const updateAssignment = () => {
        const id = props.id;
        const updatedAssignment = {
            assignmentName: assignmentName,
            currentMark: currentMark,
            gradeWeight: gradeWeight,
            id: id,
        }

        props.newAssignmentHandler(updatedAssignment);
    } 


  return (
    <div>
        <input type="text" className="text" 
        placeholder='Assignment Name'  
        onChange={assignmentNameHandler}
        />
        <input 
        type="text" className="text" 
        placeholder='Current Mark'  
        onChange={currentMarkHandler}
        />
        <input type="text" className="text" 
        placeholder='Grade Weight' 
        onChange={gradeWeightHandler}
        />
    </div>



  )
}

export default NewAssignment