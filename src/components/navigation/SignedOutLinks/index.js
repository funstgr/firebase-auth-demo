import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = (props) => {
  const { location } = props;
  const navLink = location === 'signin'
    ? <NavLink to='/signup'>Sign Up</NavLink>
    : <NavLink to='/signin'>Sign In</NavLink>;
  return (
    <div>
      <ul className="right">
        <li onClick={props.onClick(location)}>{navLink}</li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
