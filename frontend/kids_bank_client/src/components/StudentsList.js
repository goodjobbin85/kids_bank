import React from 'react';
import { connect } from 'react-redux';
import Student from './Student';
import { Route, Link } from 'react-router-dom';

const StudentsList = (props) => {
  return (
    <div>
      <h1>All Students</h1>
      {props.students.map(student =>
        <div key={student.id}> 
            { /*Name: {student.name} | Email: {student.email} | Balance: {student.balance} | Allowance: {student.allowance}*/ }
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>{student.name} - {student.email}</Link>
            </li>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return { students: state.students }
}

export default connect(mapStateToProps)(StudentsList);
