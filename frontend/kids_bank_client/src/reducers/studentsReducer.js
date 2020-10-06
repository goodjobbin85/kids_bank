export const studentsReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_STUDENTS':
      return action.payload
    //case 'ADD_STUDENT':
      //return { ...state, students: [ ...state.students, action.student] }
      //return { todos: state.todos.concat(action.payload.text) };
    default:
      return state;
  }
}
