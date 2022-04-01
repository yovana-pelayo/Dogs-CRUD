import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../services/users';
export default function Header({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>

        {!currentUser && (
          <li>
            <NavLink to="auth">Sign In</NavLink>
          </li>
        )}
        {currentUser && (
          <li>
            <NavLink exact to="/dogs/new">
              Add Dog
            </NavLink>
          </li>
        )}
      </ul>
      {currentUser && (
        <ul>
          <li>{currentUser}</li>
          <li className="link" onClick={handleLogout}>
            Logout
          </li>
        </ul>
      )}
    </div>
  );
}
// if current user not authenticated send to sign in page, if they are send to ncreate new dog page

// we didn't set the currentUser or pass it in so I'm confudes about that

// what is it that we are doing? Like what is the {!current &&} technical term?
