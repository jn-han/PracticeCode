import Task from './Task'
import TaskDate from './TaskDate'
import TaskForm from './TaskForm'
import './Tasks.css'


const Tasks = ( props ) => {
    
    const saveNewTaskData = (newTask) => {
        const expenseData = {
            ...newTask,
            id: Math.random().toString(),
        }
        props.onSaveNewTaskHandler(expenseData);
    }


    return (
        <div className='view--tasks'>
            {props.items.map(task => (
                <div>
                    <Task
                    date={task.date}
                    key={task.id}
                    title={task.title}
                    />
                </div>
            ))}
            <TaskForm onSaveTaskData={saveNewTaskData}/>
        </div>
    )
}

export default Tasks