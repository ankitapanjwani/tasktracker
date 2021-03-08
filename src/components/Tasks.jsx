import React from 'react'
import Task from './TaskTable';
const Tasks = ({tasks, onDelete, onToggle}) => {

    

    // const handleClick = () => {
    //     const newData = {
    //         id: 5,
    //         text: 'Anku Reunion',
    //         day: 'Aug 6th at 6:00 pm',
    //         reminder: true
    //     }  
    //     setTasks([...tasks,newData])
    // }

  
    return (
        // console.log("Tasks:",tasks),
       <>
        {/* <button onClick={handleClick}>Click</button> */}

        {tasks.map((task)=>(
           
           <Task key={task.id} task={task} onDelete={onDelete} ontoggle ={onToggle} />
            ))}
       </>
    )
}

export default Tasks
