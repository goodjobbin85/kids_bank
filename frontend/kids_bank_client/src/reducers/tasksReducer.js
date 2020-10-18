export const tasksReducer = ( state = [], action) => {
  switch(action.type) {
    case 'FETCH_TASKS':
      return action.payload
    case 'ADD_TASK':
      state.students.map(student => {
        if (student.id === action.payload.id) {
          return action.payload
        }
      })
    default:
      return state
  }
}
