import React from 'react';
import Router from './components/Router';
import StudentsContainer from './containers/StudentsContainer';

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
