import React from 'react';
import TasksContainer from '../containers/TasksContainer';
import TasksList from './TasksList';

const Student = (props) => {
  let student = props.students.filter(student => student.id == props.match.params.id)[0]
  return (
      <div align="center">
        <h1>Student Info</h1>
        <h3>Name: {student ? student.name : null } | Email: {student ? student.email : null }</h3>

        <h1>Task Set</h1>
        <TasksContainer />
        <TasksList />
      </div>
  )
}

export default Student;
