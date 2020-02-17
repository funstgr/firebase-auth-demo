import React from 'react';
import moment from 'moment';
import Ratings from '../../Ratings';
import Button from '../../Button';
import sumArrayKey from '../../../utils/arrayUtils/sum';

class RestaurantSummary extends React.Component {
  getRating = (restId) => {
    const { reviews } = this.props;
    const filteredReviews = reviews.filter(rev => rev.rest_id === restId);
    const totalRating = sumArrayKey(filteredReviews, 'rating');
    const aveRating = parseInt(totalRating / filteredReviews.length, 10);
    const data = { rating: aveRating };
    return data;
  }

  render() {
    const {
      restaurant, getRestaurant, deleteRestaurant, profile, reviews,
    } = this.props;
    const formattedDate = moment(new Date(restaurant.created)).format('YYYY-MM-DD');
    const data = reviews ? this.getRating(restaurant.id) : { rating: 0 };
    return (
      <div className="card z-depth-0 restaurant-summary" >
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">{restaurant.name}</span>
          <Ratings data={data} ratingType='Average'/>
          <p className="grey-text">Date Added: {formattedDate} </p>
          {profile.role === 'admin'
            && <Button className='button pink lighten-1' onClick={deleteRestaurant} label='Delete Restaurant'/>}
          <Button className='button pink lighten-1' onClick={getRestaurant} label='Check Reviews'/>
        </div>
      </div>
    );
  }
}

export default RestaurantSummary;
