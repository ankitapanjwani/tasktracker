import React from 'react'
import ClearIcon from '@material-ui/icons/Clear';
const TaskTable = ({task, onDelete,ontoggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' :'' }`} onDoubleClick={()=>ontoggle(task.id)}>
             <h3 key={task.id}>{task.text}<ClearIcon onClick={() => onDelete(task.id)} style={{color: 'red', cursor: 'pointer'}}/></h3>
             <p>{task.day}</p>
        </div>
    )
}

export default TaskTable
