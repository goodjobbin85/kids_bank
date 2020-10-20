import React from 'react';
import { Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        <li><Link to={`/about`} >About</Link></li>
        <li><Link to={`/students`} >All Students</Link> </li>
      </ul>
    </div>
  );
}

export default Home;
