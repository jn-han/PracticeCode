import Task from './Task'


const Tasks = ( props ) => {
    return (
        <div>
            {props.items.map(task => (
                <Task
                key={task.id}
                title={task.title}
                date={task.date}
                />
            ))}
        </div>
    )
}

export default Tasks