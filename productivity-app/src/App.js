import { useState } from "react";
import AssignmentInformationTable from "./components/AssignmentInformationTable";

const DUMMY_GRADES = [
  { 
    assignmentName: "",
    currentGrade: 0,
    weightedGrade: '',
    id: 0,
  },
  { 
    assignmentName: "",
    currentGrade: 0,
    weightedGrade: '',
    id: 1,
  },
  { 
    assignmentName: "",
    currentGrade: 0,
    weightedGrade: '',
    id: 2,
  },
  { 
    assignmentName: "",
    currentGrade: 0,
    weightedGrade: '',
    id: 3,
  },
  { 
    assignmentName: "",
    currentGrade: 0,
    weightedGrade: 0,
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
    setGrades(newList)
    console.log(newList);
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Grade Tracker</h1>
        <AssignmentInformationTable items={grades} updateAssignmentList={updateAssignmentList}/>
      </header>
    </div>
  );
}

export default App;
