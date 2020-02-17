import React from 'react';
import moment from 'moment';

const RestaurantSummary = ({ restaurant }) => {
  const formattedDate = moment(new Date(restaurant.created)).format('YYYY-MM-DD');
  return (
    <div className="card z-depth-0 restaurant-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{restaurant.name}</span>
        <p>Posted by {restaurant.createdBy}</p>
        <p className="grey-text">Date Added: {formattedDate} </p>
      </div>
    </div>
  );
};

export default RestaurantSummary;
