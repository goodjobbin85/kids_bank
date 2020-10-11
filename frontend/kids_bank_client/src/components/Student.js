import React from 'react';

const Student = (props) => {
  let student = props.students.filter(student => student.id == props.match.params.id)[0]
  return (
      <div align="center">
        <h1>Student Info</h1>
        <h3>Name: {student ? student.name : null } | Email: {student ? student.email : null }</h3>

        <h1>Task Set</h1>
      </div>
  )
}

export default Student;
