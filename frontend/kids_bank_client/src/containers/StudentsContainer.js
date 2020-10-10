import React, { Component } from 'react';
import StudentsForm from '../components/StudentsForm';
import { connect } from 'react-redux';
import { fetchStudents } from '../actions/studentsActions';
import Student from '../components/Student';

class StudentsContainer extends Component {
  //allStudents = () => this.props.students.map((student, id) => <Student key={id} name={student.name} email={student.email} allowance={student.allowance} balance={student.balance} />)
  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    return (
      <div>
        <StudentsForm />

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
