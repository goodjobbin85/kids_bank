export const addTask = (task, studentId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/students/${studentId}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(student => dispatch({type: 'ADD_TASK', payload: student }))
  }
}

export const deleteTask = (taskId, studentId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/students/${studentId}/tasks/${taskId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(student => dispatch({type: 'DELETE_TASK', payload: student}))
  }
}
