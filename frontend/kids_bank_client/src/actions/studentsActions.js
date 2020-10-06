export const fetchStudents = () => {
  return dispatch => {
    fetch('http://127.0.0.1:3000/students')
      .then(response => response.json())
      .then(students => dispatch({ type: 'FETCH_STUDENTS', payload: students }))
  }
}

export const addStudent = (student) => {
  return dispatch => {
    fetch('http://127.0.0.1:3000/students', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(student => dispatch({ type: 'ADD_STUDENT', payload: student }))
  }
}
