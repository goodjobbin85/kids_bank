import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
    <div align="center">
        <span><NavLink to={`/home`}>Home</NavLink></span> |
        <span><NavLink to={`/about`} >About</NavLink></span> |
        <span><NavLink to={`/students`} >All Students</NavLink> </span> |
        <span><NavLink to={`/students/new`}>Create New Student</NavLink></span>
    </div>
    </div>
  );
}

export default NavBar;
