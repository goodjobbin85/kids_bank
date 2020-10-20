import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/tasksActions';


const TasksList = (props) => {

  const handleDelete = (task) => {
    props.deleteTask(task.id, task.student_id)
  }

    return (
      <div>
        <ul>
          {props.tasks && props.tasks.map(task =>
            <li key={task ? task.id : null}>Task: {task ? task.title : null} | Task Description: {task ? task.description : null} | Task Value: ${task ? task.value : null} <button onClick={handleDelete}>Complete Task</button></li>
          )}
        </ul>
      </div>
    )

}

export default connect(null, { deleteTask })(TasksList );
