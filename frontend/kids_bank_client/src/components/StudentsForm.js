import React, { Component } from 'react';

class StudentsForm extends Component {

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
        <br />

        <label>Email</label>
        <input type="email" value={this.state.email} onChange={this.handleChange} name="email" />
        <br />

        <label>Allowance<label>
        <input type="text" value={this.state.allowance} onChange={this.handleChange} name="allowance" />
        <br />

        <label>Balance</label>
        <input type="text" value={this.state.balance} onChange={this.handleChange} name="balance" />
        <br />

        <input type="submit" value="Create New Student"
      </form>
    );
  }

}

export default StudentsForm;
