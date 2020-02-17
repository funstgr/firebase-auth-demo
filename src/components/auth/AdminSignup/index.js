import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import CreateUserForm from '../../users/CreateUserForm';

import { createUser2 } from '../../../store/actions/userActions';

class AdminSignUp extends React.Component {
  handleSubmit = (state) => {
    const { adminSignUpUser, history, authError } = this.props;
    adminSignUpUser(state);
  }

  render() {
    const { adminSignupError, profile } = this.props;
    if (profile.role && profile.role !== 'admin') return <Redirect to='/' />;
    if (adminSignupError === 'ADMIN_SIGNUP_SUCCESS') return <Redirect to='/manage_users' />;
    return (
      <CreateUserForm
          authError={adminSignupError}
          handleSubmit={state => this.handleSubmit(state)}
          buttonLabel='Create User'
          formHeader='Admin Create User'
      />
    );
  }
}

const mapStateToProps = state => ({
  adminSignupError: state.adminSignup.adminSignupError,
  profile: state.firebase.profile,
});

const mapDispatchToProps = dispatch => ({
  adminSignUpUser: user => dispatch(createUser2(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminSignUp);
