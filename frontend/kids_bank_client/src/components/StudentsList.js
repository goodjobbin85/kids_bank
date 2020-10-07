import React from 'react';
import { connect } from 'react-redux';

const StudentsList = ({ students }) => {
  return (
    <div>
      <h1>All Students</h1>
      {students.map(student =>
        <ul key={student.id}>
          <li>
            Name: {student.name} | Email: {student.email} | Balance: {student.balance} | Allowance: {student.allowance}
          </li>
        </ul>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return { students: state.students }
}

export default connect(mapStateToProps)(StudentsList);
