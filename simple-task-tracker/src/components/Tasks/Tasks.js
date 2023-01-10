import Task from './Task'
import TaskForm from '../NewTaskForm/TaskForm'
import './Tasks.css'


const Tasks = ( props ) => {
    
    const saveNewTaskData = (newTask) => {
        const expenseData = {
            ...newTask,
            id: Math.random().toString(),
        }
        props.onSaveNewTaskHandler(expenseData);
    }
    
    const onChecked = (num) => {
        console.log(num)
    }


    return (
        <div className='view--tasks'>
            {props.items.map(task => (
                <div>
                    <Task
                    date={task.date}
                    key={task.id}
                    title={task.title}
                    onChecked={onChecked}
                    />
                </div>
            ))}
            <TaskForm onSaveTaskData={saveNewTaskData}/>
        </div>
    )
}

export default Tasks