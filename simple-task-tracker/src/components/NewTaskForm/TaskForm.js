import React, {useState} from 'react'
import './TaskForm.css'


const TaskForm = ( props ) => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [enteredTaskName, setEnteredTaskName] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredSortType, setEnteredSortType] = useState('');
    const [hasTitle, setHasTitle] = useState(false);

    const cancelButtonHandler = () => {
        setShowAddTask(false);
    }

    const addButtonHandler = () => {
        setShowAddTask(true);
    }

    const taskNameHandler = (e) => {
        setEnteredTaskName(e.target.value);
        if (e.target.value != '') {
            setHasTitle(true);
        } else if (e.target.value == ''){
            setHasTitle(false);
        }
    }

    const descriptionHandler = (e) => {
        setEnteredDescription(e.target.value)
    }

    const dateHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const sortTypeHandler = (e) => {
        setEnteredSortType(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newTaskData = {
            title: enteredTaskName,
            description: enteredDescription,
            date: new Date(enteredDate),
            sortType: enteredSortType,
        }
        props.onSaveTaskData(newTaskData);
    }

    return (
        <div className='taskform--body'>
            {showAddTask
            ?
            <form onSubmit={submitHandler} className="task--form">
                <div className='taskform--gatherInfo'>
                    <input type="text" className="task-tBox" placeholder="Task Name" onChange={taskNameHandler}/>
                    <textarea placeholder="Description" className='text-description' onChange={descriptionHandler}></textarea>
                    <div className='newTask-organizers'>
                        <input type="date" onChange={dateHandler}></input>
                        <select onChange={sortTypeHandler}>
                            <option>Inbox</option>
                        </select>
                    </div>
                </div>
                <div className='submit--cancel--btn'>
                    <button className='cancelBtn' onClick={cancelButtonHandler}>Cancel</button>
                    { hasTitle 
                    ?
                        <button type='submit' className='addBtn'>Add Task</button>
                    : 
                        <button className='disabled' disabled>Add Task</button>
                    }

                </div>

            </form>            
            :
            <div className='before--click' onClick={addButtonHandler}>
                <p><span className='addSymbol--p'>&#43;</span> <span className='addTask--p'>Add Task</span></p>
            </div>
            }
            
        </div>

    )
}

export default TaskForm