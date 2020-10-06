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
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
          <br/>

          <label>Email</label>
          <input type="email" value={this.state.email} onChange={this.handleChange} name="email" />
          <br/>

          <label>Allowance</label>
          <input type="text" value={this.state.allowance} onChange={this.handleChange} name="allowance" />
          <br/>

          <label>Balance</label>
          <input type="text" value={this.state.balance} onChange={this.handleChange} name="balance" />
          <br/>

          <input type="submit" value="Create New Student" />
        </form>
      </div>
    );
  }

}

export default connect(null, {addStudent})(StudentsForm);
