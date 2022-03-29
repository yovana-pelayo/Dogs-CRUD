import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dogs">Dogs</NavLink>

      <h1>Dogs HomePage!</h1>
    </div>
  );
}
