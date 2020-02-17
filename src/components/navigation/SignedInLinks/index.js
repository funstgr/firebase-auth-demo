import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';

const SignedInLinks = (props) => {
  // eslint-disable-next-line no-shadow
  const { profile, signOut, setLocation } = props;
  const createRestaurant = profile.role === 'admin' ? <li><NavLink to='/create'>Add A Restaurant</NavLink></li> : '';
  const manageUsers = profile.role === 'admin' ? <li><NavLink to='/manage_users'>Manage Users</NavLink></li> : '';

  return (
    <div onClick={setLocation}>
      <ul className="right">
        <li><NavLink to='/'>Restaurants</NavLink></li>
        {manageUsers}
        {createRestaurant}
        <li><a onClick={signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

const mapStateToProps = state => ({
  profile: state.firebase.profile,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
