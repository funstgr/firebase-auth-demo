import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import CreateUserForm from '../../users/CreateUserForm';

import { updateUser } from '../../../store/actions/userActions';

class AdminUpdateUser extends React.Component {
  handleSubmit = (user) => {
    const { id, adminUpdateUser, history } = this.props;
    user.uid = id;
    // console.log(state);
    adminUpdateUser(user);
  }

  render() {
    const { adminUpdateError, profile, user } = this.props;
    if (profile.role && profile.role !== 'admin') return <Redirect to='/' />;
    if (adminUpdateError === 'ADMIN_UPDATE_SUCCESS') return <Redirect to='/manage_users' />;
    return (
      <CreateUserForm
          authError={adminUpdateError}
          handleSubmit={state => this.handleSubmit(state)}
          buttonLabel='Update User'
          formHeader='Admin Update User Info'
          user={user}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line prefer-destructuring
  const id = ownProps.match.params.id;
  // eslint-disable-next-line prefer-destructuring
  const users = state.firestore.data.users;
  // eslint-disable-next-line prefer-destructuring
  const user = users ? users[id] : null;
  return {
    id,
    user,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    adminUpdateError: state.adminUpdate.adminUpdateError,
  };
};

const mapDispatchToProps = dispatch => ({
  adminUpdateUser: user => dispatch(updateUser(user)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'users', orderBy: ['username', 'desc'] },
  ]),
)(AdminUpdateUser);
