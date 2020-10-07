import React from 'react';
import { Switch, Route } from 'react-router-dom'

const Router = () => (
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/students' component={StudentsList} /> 
    </Switch>
  )

);

export default Router;
