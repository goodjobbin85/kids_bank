export function studentsReducer(state = { students: []} , action) {
  switch(action.type) {
    case 'FETCH_STUDENTS':
      return { ...state, students: [...state.students, action.payload] }
    case 'ADD_STUDENT':
      return { ...state, students: [...state.students, action.payload] }
      //return { todos: state.todos.concat(action.payload.text) };
    default:
      return state;
  }
}
