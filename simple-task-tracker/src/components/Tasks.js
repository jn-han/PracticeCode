import Task from './Task'
import TaskDate from './TaskDate'


const Tasks = ( props ) => {
    return (
        <div>
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
        </div>
    )
}

export default Tasks