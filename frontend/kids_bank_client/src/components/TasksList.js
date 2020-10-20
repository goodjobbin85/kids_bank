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
            <li key={task.id}>Task: {task.title} | Task Description: {task.description} | Task Value: ${task.value} <button onClick={() => handleDelete(task)}>Complete Task</button></li>
          )}
        </ul>
      </div>
    )

}

export default connect(null, { deleteTask })(TasksList );
