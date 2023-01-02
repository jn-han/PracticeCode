import Tasks from './components/Tasks';
import './App.css';
import { useState } from 'react';

const DUMMY_TASKS = [
  {
    title: "Clean up room",
    date: new Date(2022,12,21),
    id: Math.random().toString()
  },
  {
    title: "Do Homework",
    date: new Date(2022,12,22),
    id: Math.random().toString()
  },
  {
    title: "Code Website",
    date: new Date(2022,12,21),
    id: Math.random().toString()
  },
  {
    title: "Take out garbage",
    date: new Date(2022,12,22),
    id: Math.random().toString()
  }
]


function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  tasks.sort((a,b) => a.date - b.date)
  let filteredDates = [];

  for(let i = 0; i < tasks.length; i++) {
    filteredDates.push(tasks[i].date);
  }
  



  const saveNewTaskHandler = (expenseData) => {
    setTasks((previousTasks =>{
      return [expenseData, ...previousTasks]
    }))
  }
  


  return (
    <div className="App">
      <h1>Simple Task Tracker</h1>
      <Tasks items={tasks} onSaveNewTaskHandler={saveNewTaskHandler}/>
    </div>
  );
}

export default App;
