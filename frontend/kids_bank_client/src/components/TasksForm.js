import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/tasksActions';


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
      <div align="center">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Task Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div clasName="form-group">
            <label>Description</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Value</label>
            <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
          </div>
          <input type="submit" className="btn btn-primary"/>
        </form>
      </div>
    );
  }

}

export default connect(null, { addTask })(TasksForm);
