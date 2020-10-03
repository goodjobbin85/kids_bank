import { combineReducers } from 'redux';
import { studentsReducer } from './studentsReducer';
import { tasksReducer } from './tasksReducer';

export const rootReducer = combineReducers({
  students: studentsReducer,
  tasks: tasksReducer
});
