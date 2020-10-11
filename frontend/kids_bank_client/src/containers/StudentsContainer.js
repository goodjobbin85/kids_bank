import React, { Component } from 'react';
import StudentsForm from '../components/StudentsForm';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchStudents } from '../actions/studentsActions';
import Student from '../components/Student';
import StudentsList from '../components/StudentsList';

class StudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    return (
      <div>
        { /* this works: <StudentsList students={this.props.students}/>*/ }
        <Switch>
          <Route exact path='/students/new' component={StudentsForm} />
          <Route exact path='/students' render={(routerProps) => <StudentsList {...routerProps} students={this.props.students}/>} />
          <Route exact path='/students/:id' render={(routerProps) => <Student {...routerProps} students={this.props.students}/>} />
        </Switch>


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
