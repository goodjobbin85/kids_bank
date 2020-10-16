import React from 'react';

const Tasks = (props) => {

    return (
      <div>
        <ul>
          {props.tasks && props.tasks.map(task =>
            <li key={task.id}>Task: {task.title} | Task Description: {task.description} | Task Value: ${task.value}</li>
          )}
        </ul> 
      </div>
    )

}

export default Tasks;
