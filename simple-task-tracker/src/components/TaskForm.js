import React, {useState} from 'react'
import './TaskForm.css'

const TaskForm = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const addButtonHandler = () => {
        setShowAddTask(true)
    }

    return (
        <div className='taskform--body'>
            {showAddTask
            ?
            <div className='taskform--view'>
                <input type="text" className="text" placeholder="Task Name"/>
                <textarea placeholder="Description"></textarea>
                <div>
                    <input type="date"></input>
                    <select>
                        <option>Inbox</option>
                        <option>Upcoming</option>
                        <option>hello</option>
                    </select>
                    <button>add</button>
                </div>

            </div> 
            :
            <div className='before--click' onClick={addButtonHandler}>
                <p><span>&#43;</span> <span className='addTask--p'>Add Task</span></p>
            </div>
            }
            
        </div>

    )
}

export default TaskForm