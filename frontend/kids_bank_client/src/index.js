import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';

import App from './App'
//import { rootReducer } from './reducers/rootReducer'
import { studentsReducer } from './reducers/studentsReducer'

const store = createStore(
  studentsReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <App />
      <Home />
    </Router>
  </Provider>,
  document.getElementById('root')
)
