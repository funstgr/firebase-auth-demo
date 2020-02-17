import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import RatingsStars from './RatingStars';

class Ratings extends React.PureComponent {
  render() {
    const { data, ratingType } = this.props;
    const getRating = ratingType !== 'undefined' ? ratingType : '';
    let stars = [];
    // build stars array of five stars based on # stars in data
    if (data !== undefined && data.rating !== 0) {
      for (let i = 1; i <= 5; i++) {
        let rating = 0;
        if (data.rating >= i) {
          rating = 1;
        } else if (data.rating >= (i - 0.5)) {
          rating = 0.5;
        }
        stars.push(<RatingsStars key={i} rating={rating}/>);
      }
    } else if (ratingType === 'Average') {
      stars = 'This establishment has no reviews.';
    }

    return (
      <div className='ratings-container'>
          {getRating}  Rating: {stars}
      </div>
    );
  }
}

Ratings.propTypes = {
  data: PropTypes.object,
};

export default Ratings;
