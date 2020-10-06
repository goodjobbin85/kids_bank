import React, { Component } from 'react';
import StudentsForm from './StudentsForm';
import { connect } from 'react-redux';
import { fetchStudents } from '../actions/studentsActions';
import Student from './Student';

class StudentsContainer extends Component {
  //allStudents = () => this.props.students.map((student, id) => <Student key={id} name={student.name} email={student.email} allowance={student.allowance} balance={student.balance} />)
  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    return (
      <div>
        <StudentsForm />
         { /*this.allStudents()*/ }
         Students Container
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

export default connect(null, {fetchStudents})(StudentsContainer);
