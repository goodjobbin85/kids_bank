import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/addTask';


class TasksForm extends React.Component {
  state = {
    title: '',
    description: '',
    value: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTask(this.state, this.props.student.id)
    this.setState({
      title: '',
      description: '',
      value: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Task Title</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <label>Description</label>
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          <label>Value</label>
          <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }

}

export default connect(null, { addTask })(TasksForm);
