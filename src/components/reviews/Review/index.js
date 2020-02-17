import React from 'react';
import PropTypes from 'prop-types';
import ReviewInfo from '../ReviewInfo';
import './review.css';

class Review extends React.Component {
  render() {
    const { data, onClick, profile } = this.props;

    return (
      <li className='card-content'>
        <div className=''>
          {<ReviewInfo data={data} onClick={onClick} profile={profile}/>}
        </div>
      </li>
    );
  }
}

export default Review;
