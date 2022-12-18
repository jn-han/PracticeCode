import React, { useState } from 'react'
import './NewAssignment.css'

const NewAssignment = ( props ) => {
    const [assignmentName, setAssignmentName] = useState('');
    const [currentMark, setCurrentMark] = useState();
    const [gradeWeight, setGradeWeight] = useState();
    
    const assignmentNameHandler = (e) => {
        setAssignmentName(e.target.value)
        props.updateAssignmentName(e.target.value, props.id)

    }

    const currentMarkHandler = (e) => {
        setCurrentMark(e.target.value);
        props.updateCurrentMark(e.target.value, props.id)
    }

    const gradeWeightHandler = (e) => {
        setGradeWeight(e.target.value);
        props.updateGradeWeight(e.target.value, props.id)
    }



  return (
    <div className='form'>
        <input type="text" className="text" 
        placeholder='Assignment Name'
        onChange={assignmentNameHandler}
        />
        <input 
        type="number" className="numMark" 
        placeholder='Current Mark'
        onChange={currentMarkHandler}
        />
        <input type="number" className="numWeight" 
        placeholder='Grade Weight' 
        onChange={gradeWeightHandler}
        />
    </div>



  )
}

export default NewAssignment