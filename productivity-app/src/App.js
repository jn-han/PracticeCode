import { useState } from "react";
import AssignmentInformationTable from "./components/AssignmentInformationTable";
import './App.css'

const DUMMY_GRADES = [
  { 
    assignmentName: "",
    currentGrade: 0,
    weightedGrade: 0,
    id: 0,
  },
  { 
    assignmentName: "",
    currentGrade: 0,
    weightedGrade: 0,
    id: 1,
  },
  { 
    assignmentName: "",
    currentGrade: 0,
    weightedGrade: 0,
    id: 2,
  },
  { 
    assignmentName: "",
    currentGrade: 0,
    weightedGrade: 0,
    id: 3,
  },
  { 
    assignmentName: "",
    currentGrade: 0,
    weightedGrade: "",
    id: 4,
  },
  { 
    assignmentName: "",
    currentGrade: 0,
    weightedGrade: 0,
    id: 5,
  },
]

function App() {
  const [grades, setGrades] = useState(DUMMY_GRADES);

  const updateAssignmentList = (newList) => {
    setGrades(newList);
  } 

  const addNewAssignment = (newList) => {
    setGrades((prevGrades => {
      return [newList, ...prevGrades]
    }))
  } 

  return (
    <div className="App">
      <header className="App-header">
        <div className="intro">
          <h1>Grade Calculator</h1>
          <p>by Josh Nguyen <a href="https://github.com/jn-han" target="_blank" className="github">Github</a></p>  
        </div>
        <AssignmentInformationTable items={grades} addNewAssignment={addNewAssignment} updateAssignmentList={updateAssignmentList}/>
      </header>
    </div>
  );
}

export default App;
