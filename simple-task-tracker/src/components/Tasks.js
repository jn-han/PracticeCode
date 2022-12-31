import Task from './Task'
import TaskDate from './TaskDate'
import TaskForm from './TaskForm'
import './Tasks.css'


const Tasks = ( props ) => {
    return (
        <div className='view--tasks'>
            {props.items.map(task => (
                <div className=''>
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
            <TaskForm/>
        </div>
    )
}

export default Tasks