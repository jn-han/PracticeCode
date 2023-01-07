import Tasks from './components/Tasks/Tasks';
import './App.css';
import { useState } from 'react';
import TaskBar from './components/TaskBar/TaskBar';

const DUMMY_TASKS = [
  {
    title: "Clean up room",
    date: new Date(2024, 11, 21),
    id: Math.random().toString()
  },
  {
    title: "Do Homework",
    date: new Date(2018, 10, 22),
    id: Math.random().toString()
  },
  {
    title: "Code Website",
    date: new Date(2017, 4 ,21),
    id: Math.random().toString()
  },
  {
    title: "Take out garbage",
    date: new Date(2024, 2 ,22),
    id: Math.random().toString()
  }
]

const BASE_SORT_TYPES = [
  "Inbox",
  "Today",
  "Upcoming",
]


function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  const [sortTypes, setSortTypes] = useState(BASE_SORT_TYPES);


  tasks.sort((a,b) => a.date - b.date)
  let filteredDates = [];

  for(let i = 0; i < tasks.length; i++) {
    filteredDates.push(tasks[i].date);
  }
  
  const saveNewTaskHandler = (expenseData) => {
    setTasks((previousTasks =>{
      return [expenseData, ...previousTasks]
    }))
    console.log(tasks)
  }
  
  return (
    <div className="App">
      <TaskBar items={sortTypes}/>
      <Tasks items={tasks} onSaveNewTaskHandler={saveNewTaskHandler}/>
    </div>
  );
}

export default App;
