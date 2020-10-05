export const fetchStudents = () => {
  return dispatch => {
    fetch('http://127.0.0.1:3000:students')
      .then(response => response.json())
      .then(students => dispatch({ type: 'FETCH_STUDENTS', payload: students }))
  }
}
