import React, { useState } from 'react'

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
    <div>
        <input type="text" className="text" 
        placeholder='Assignment Name'

        onChange={assignmentNameHandler}
        />
        <input 
        type="number" className="text" 
        placeholder='Current Mark'

        onChange={currentMarkHandler}
        />
        <input type="number" className="text" 
        placeholder='Grade Weight' 

        onChange={gradeWeightHandler}
        />
    </div>



  )
}

export default NewAssignment