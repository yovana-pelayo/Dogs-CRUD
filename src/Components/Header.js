import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dogs">Dogs</NavLink>
      <NavLink to="/dogs/new">New Dog</NavLink>
    </div>
  );
}
