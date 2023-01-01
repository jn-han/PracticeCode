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
            <div>
                <div className='taskform--gatherInfo'>
                    <input type="text" className="task-tBox" placeholder="Task Name"/>
                    <textarea placeholder="Description" className='text-description'></textarea>
                    <div className='newTask-organizers'>
                        <input type="date"></input>
                        <select>
                            <option>Inbox</option>
                        </select>
                    </div>
                </div>
                <div className='submit--cancel--btn'>
                    <button className='cancelBtn'>Cancel</button>
                    <button className='addBtn'>Add Task</button>
                </div>

            </div>            
            :
            <div className='before--click' onClick={addButtonHandler}>
                <p><span className='addSymbol--p'>&#43;</span> <span className='addTask--p'>Add Task</span></p>
            </div>
            }
            
        </div>

    )
}

export default TaskForm