import React from 'react';
import Router from './Router';
import StudentsContainer from './StudentsContainer' ;
import StudentsList from './StudentsList';

const App = () => {
  return (
    <div>
      <h1 align="center">Kids Bank</h1>
      <Router />
      <StudentsContainer />
    </div>
  )
}

export default App;
