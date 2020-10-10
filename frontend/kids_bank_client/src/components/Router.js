import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import About from './About'
import StudentsList from './StudentsList';
import StudentsContainer from '../containers/StudentsContainer';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/students' component={StudentsList} />
    </Switch>
  )

};

export default Router;
