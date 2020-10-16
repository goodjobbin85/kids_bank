import React from 'react';
import TasksForm from '../components/TasksForm';
import TasksList from '../components/TasksList';

class TasksContainer extends React.Component {

  render() {
    return (
      <div>
        <TasksForm student={this.props.student}/>
        <TasksList tasks={this.props.student && this.props.student.tasks} />
      </div>
    );
  }

}

export default TasksContainer;
