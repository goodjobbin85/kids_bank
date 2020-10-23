import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../actions/studentsActions';

class StudentsForm extends Component {
  state = {
    name: '',
    email: '',
    allowance: '',
    balance: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addStudent(this.state)
    this.setState({
      name: '',
      email: '',
      allowance: '',
      balance: ''
    })
  }

  render() {
    return (
      <div align="center">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" value={this.state.email} onChange={this.handleChange} name="email" />
          </div>

          <div className="form-group">
            <label>Allowance</label>
            <input type="text" value={this.state.allowance} onChange={this.handleChange} name="allowance" />
          </div>

          <div className="form-group">
            <label>Balance</label>
            <input type="text" value={this.state.balance} onChange={this.handleChange} name="balance" />
          </div>

          <input type="submit" value="Create New Student" className="btn btn-primary"/>
        </form>
      </div>
    );
  }

}

export default connect(null, {addStudent})(StudentsForm);
