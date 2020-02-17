import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from '../UserInfo';
import './user.css';

class User extends React.Component {
  render() {
    const {
      data, deleteUser, makeAdmin, profile, createUser, updateUser, deleteAdmin,
    } = this.props;


    return (
      <li className='card-content'>
        <div className=''>
          {<UserInfo data={data} updateUser={updateUser} createUser={createUser} makeAdmin={makeAdmin} deleteAdmin={deleteAdmin} deleteUser={deleteUser} profile={profile}/>}
        </div>
      </li>
    );
  }
}

export default User;
