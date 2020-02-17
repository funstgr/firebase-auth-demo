import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import User from '../User';
import Button from '../../Button';
import sortArray from '../../../utils/sort/sort';
import './users.css';
import {
  deleteUser, updateUser, addAdminRole, createUser2, removeAdminRole,
} from '../../../store/actions/userActions';

class UserList extends React.Component {
  deleteUsr = id => (e) => {
    const { deleteUsr, history } = this.props;
    e.preventDefault();
    const data = { uid: id };
    deleteUsr(data);
    history.push('/manage_users');
  }

  makeAdmin = user => (e) => {
    const { makeAdmin, profile } = this.props;
    console.log(user);
    e.preventDefault();
    const data = { email: user.username, uid: user.id, updatedBy: profile.username };
    makeAdmin(data);
  }

  deleteAdmin = user => (e) => {
    const { removeAdmin, profile } = this.props;
    console.log(user);
    e.preventDefault();
    const data = { email: user.username, uid: user.id, updatedBy: profile.username };
    removeAdmin(data);
  }

  createUsr = () => (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/admin_signup');
  }

  updateUsr = id => (e) => {
    const { history } = this.props;
    e.preventDefault();
    history.push(`/update_user/${id}`);
  }

  getUsersList = (users) => {
    const { reviews } = this.props;
    const usersList = [];
    const keys = reviews ? Object.keys(users) : null;
    if (keys !== null) {
      keys.forEach((key) => {
        if (reviews[key] !== null) {
          usersList.push(users[key]);
        }
        if (users[key] !== null) users[key].key = key;
      });
    }
    return usersList;
  };

  getUserList = (users) => {
    const { profile } = this.props;
    let userList = [];
    userList = users ? users.map(user => <User key={user.id}
      profile={profile}
      data={user}
      makeAdmin={this.makeAdmin(user)}
      deleteAdmin={this.deleteAdmin(user)}
      updateUser={this.updateUsr(user.id)}
      deleteUser={this.deleteUsr(user.id)} />) : userList;
    return userList;
  }

  render() {
    const { auth, users } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />;
    const userList = this.getUserList(users);
    console.log(userList);
    const user = {
      email: 'test_email2@google.com', password: '12345678', lastName: 'Test', firstName: 'Test',
    };
    return (
      <div className="container user-details-container">
        <Button className='button pink lighten-1' onClick={this.createUsr()} label='Create User' />
        <div className = 'section '>
          <ul className="card z-depth-0">
            {userList}
          </ul>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  users: state.firestore.ordered.users,
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

const mapDispatchToProps = dispatch => ({
  deleteUsr: userId => dispatch(deleteUser(userId)),
  updateUsr: user => dispatch(updateUser(user)),
  makeAdmin: email => dispatch(addAdminRole(email)),
  removeAdmin: email => dispatch(removeAdminRole(email)),
  createUsr: user => dispatch(createUser2(user)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'users', orderBy: ['username', 'desc'] },
  ]),
)(UserList);
