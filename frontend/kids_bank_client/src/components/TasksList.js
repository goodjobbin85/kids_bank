import React from 'react';

const Tasks = (props) => {

    return (
      <div>
        <ul>
          {props.tasks && props.tasks.map(task =>
            <li key={task ? task.id : null}>Task: {task ? task.title : null} | Task Description: {task ? task.description : null} | Task Value: ${task ? task.value : null} <button>Complete Task</button></li>
          )}
        </ul>
      </div>
    )

}

export default Tasks;
