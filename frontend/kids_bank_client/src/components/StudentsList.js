import React from 'react';
import { Link } from 'react-router-dom';
import Student from './Student';

const StudentsList = (props) => {

  return (
    <div align="center">
      <h1>All Students</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.students.map(student =>

            <div key={student.id}>
                { /*Name: {student.name} | Email: {student.email} | Balance: {student.balance} | Allowance: {student.allowance}*/ }
                <tr>
                  <div key={student.id}>
                    <th scope="row">{student.id}</th>
                    <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
                    <td>{student.email}</td>
                  </div>
                </tr>
            </div>
          )}
          </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
