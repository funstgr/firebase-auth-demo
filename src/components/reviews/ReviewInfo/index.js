import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Ratings from '../../Ratings';
import Button from '../../Button';
import { deleteReview } from '../../../store/actions/reviewActions';

class ReviewInfo extends React.PureComponent {
  render() {
    const { data, onClick, profile } = this.props;

    const testDataExists = (typeof data !== 'undefined');
    const comment = testDataExists ? data.comment : 'Test Name';
    const formattedDate = moment(new Date(data.visited)).format('YYYY-MM-DD');
    const date = testDataExists ? formattedDate : 'Test Date';

    return (
      <div className='review-card'>
        <div className='inner-review-card' >
          <div>{comment}</div>
          <div>Date posted: {date}</div>
          <Ratings data={data} />
          {profile && profile.role === 'admin' && <Button className='button pink lighten-1' onClick={onClick} label='Delete Review' />}
        </div>
      </div>
    );
  }
}

ReviewInfo.propTypes = {
  data: PropTypes.object,
};

export default ReviewInfo;
