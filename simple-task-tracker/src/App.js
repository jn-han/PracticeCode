import Tasks from './components/Tasks';
import './App.css';
import { useState } from 'react';

const DUMMY_TASKS = [
  {
    title: "Clean up room",
    date: new Date(2022,12,21),
    id: 1
  },
  {
    title: "Do Homework",
    date: new Date(2022,12,22),
    id: 2
  }
]


function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  return (
    <div className="">
      <h1>Simple Task Tracker</h1>
      <Tasks items={tasks}/>
    </div>
  );
}

export default App;
