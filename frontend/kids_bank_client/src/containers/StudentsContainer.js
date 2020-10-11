import React, { Component } from 'react';
import StudentsForm from '../components/StudentsForm';
import { connect } from 'react-redux';
import { fetchStudents } from '../actions/studentsActions';
import Student from '../components/Student';
import StudentsList from '../components/StudentsList';

class StudentsContainer extends Component {
  //allStudents = () => this.props.students.map((student, id) => <Student key={id} name={student.name} email={student.email} allowance={student.allowance} balance={student.balance} />)
  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    return (
      <div>
        { /* this works: <StudentsList students={this.props.students}/>*/ }
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

export default connect(mapStateToProps, { fetchStudents })(StudentsContainer);
