import Task from './Task'
import './Tasks.css'


const Tasks = ( props ) => {
    return (
        <div className='task-list-display'>
            {props.items.map(task => (
                <Task
                key={task.id}
                title={task.title}
                date={task.date}
                />
            ))}
            <InputForm/>
        </div>
    )
}

export default Tasks