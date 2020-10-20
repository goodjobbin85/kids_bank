export function tasksReducer(state = {
  students: [],
}, action) {
  switch(action.type) {
    case 'FETCH_TASKS':
      return action.payload
    case 'ADD_TASK':
      let addedState = state.students.map(student => {
        if (student.id === action.payload.id) {
          return action.payload
        }
      })
    case 'DELETE_TASK':
      let newState = state.students.map(student => {
        if (student.id === action.payload.id) {
          return action.payload
        }
      })
    default:
      return state
  }
}
