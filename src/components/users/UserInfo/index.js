import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Button from '../../Button';
import { deleteUser } from '../../../store/actions/userActions';

class UserInfo extends React.PureComponent {
  render() {
    const {
      data, deleteUser, makeAdmin, updateUser, deleteAdmin,
    } = this.props;

    const testDataExists = (typeof data !== 'undefined');
    const username = testDataExists ? data.username : 'Test Name';
    const initials = testDataExists ? data.initials : 'Test Initials';
    const role = testDataExists ? data.role : 'Test Role';
    const formattedDate = moment(new Date(data.created)).format('YYYY-MM-DD');
    const date = testDataExists ? formattedDate : 'Test Date';
    const addOrRemoveAdmin = data.role === 'admin'
      ? <Button className='button pink lighten-1' onClick={deleteAdmin} label='Remove Admin' />
      : <Button className='button pink lighten-1' onClick={makeAdmin} label='Make Admin' />;

    return (
      <div className='review-card'>
        <div className='inner-review-card' >
          <div>Username: {username}</div>
          <div>Initials: {initials}</div>
          <div>Role: {role}</div>
          <div>Date user created: {date}</div>
          <Button className='button pink lighten-1' onClick={deleteUser} label='Delete User' />
          {addOrRemoveAdmin}
          <Button className='button pink lighten-1' onClick={updateUser} label='Update User' />
        </div>
      </div>
    );
  }
}

UserInfo.propTypes = {
  data: PropTypes.object,
};

export default UserInfo;
