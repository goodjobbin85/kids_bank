import React from 'react';

const Student = (props) => {
  let student = props.students.filter(student => student.id == props.match.params.id)[0]
  return (
      <div>
        <h1 align="center">Student Info</h1>
        <h3 align="center">Name: {student ? student.name : null } | Email: {student ? student.email : null }</h3>
      </div>
  )
}

export default Student;
