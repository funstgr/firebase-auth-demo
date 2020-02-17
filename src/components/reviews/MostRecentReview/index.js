import React from 'react';
import PropTypes from 'prop-types';
import ReviewInfo from '../ReviewInfo';

class MostRecentReview extends React.Component {
  render() {
    const { data, onClick, profile } = this.props;

    return (
      <div className='card-content'>
        <div className=''>
            <ReviewInfo data={data} />
        </div>
      </div>
    );
  }
}

export default MostRecentReview;
