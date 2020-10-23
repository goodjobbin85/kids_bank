import React from 'react';
import TasksContainer from '../containers/TasksContainer';


const Student = (props) => {
  let student = props.students.filter(student => student.id == props.match.params.id)[0]
  return (
      <div align="center">
        <h1>Student Info</h1>
        <h3>Name: {student ? student.name : null } | Email: {student ? student.email : null }</h3>
        <h2>Balance: {student ? student.balance : null }</h2>

        <h1>Task Set</h1>
        <TasksContainer student={student}/>
      </div>
  )
}

export default Student;
