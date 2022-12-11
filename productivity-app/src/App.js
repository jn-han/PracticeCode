import GradeList from './components/GradeList';
import NewAssignment from './components/NewAssignment';

function App() {

  const gradeData = [
    { 
    },
  ]

  const addAssignmentHandler = (assignment) => {
    console.log('in App.Js');
    gradeData.push(assignment)

    for(let i = 0; i < gradeData.length; i++) {
      console.log(gradeData.at(i))
    }
  }
    

  return (
    <div className="App">
      <header className="App-header">
        <h1>Grade Tracker</h1>
        <GradeList gradeData={gradeData}/>
        <NewAssignment onAddAssignment={addAssignmentHandler}/>
      </header>
    </div>
  );
}

export default App;
