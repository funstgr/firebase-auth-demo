import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import CreateUserForm from '../../users/CreateUserForm';

import { signUp } from '../../../store/actions/authActions';

class SignUp extends React.Component {
  handleSubmit = (state) => {
    const { signUpUser } = this.props;
    signUpUser(state);
  }

  render() {
    const { auth, authError, signup } = this.props;
    if (auth.uid) return <Redirect to='/' />;
    return (
      <CreateUserForm
          authError={authError}
          handleSubmit={state => this.handleSubmit(state)}
          buttonLabel='Sign Up'
          formHeader='Sign Up'
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authError: state.auth.authError,
});

const mapDispatchToProps = dispatch => ({
  signUpUser: creds => dispatch(signUp(creds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
