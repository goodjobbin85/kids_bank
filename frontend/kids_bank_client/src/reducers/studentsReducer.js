export function studentsReducer(state = { students: []} , action) {
  switch(action.type) {
    case 'FETCH_STUDENTS':
      return { students: action.payload }
    case 'ADD_STUDENT':
      return { ...state, students: [...state.students, action.payload] }
      //return { todos: state.todos.concat(action.payload.text) };
    case 'FETCH_TASKS':
      return action.payload
    case 'ADD_TASK':
      let addedState = state.students.map(student => {
        if (student.id === action.payload.id) {
          return action.payload
        } else {
          return student
        }
      })
    case 'DELETE_TASK':
      let newState = state.students.map(student => {
        if (student.id === action.payload.id) {
          return action.payload
        }
      })
    default:
      return state;
  }
}
