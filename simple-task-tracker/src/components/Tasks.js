import Task from './Task'
import './Tasks.css'
import TaskDate from './TaskDate'
import TaskForm from './TaskForm'


const Tasks = ( props ) => {
    return (
        <div className='taskPanel'>
            
            {props.items.map(task => (
                <div>
                    <TaskDate 
                    date={task.date}
                    key={Math.random()}
                    />
                    <Task
                    key={task.id}
                    title={task.title}
                    />
                </div>
            ))}
            <TaskForm></TaskForm>
        </div>
    )
}

export default Tasks