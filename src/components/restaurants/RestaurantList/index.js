import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantSummary from '../RestaurantSummary';

class RestaurantList extends React.Component {
  render() {
    const {
      restaurants, getRestaurant, deleteRestaurant, profile, reviews,
    } = this.props;
    return (
      <div className="restaurant-list section">
        { restaurants && restaurants.map(restaurant => (
          <RestaurantSummary
            key={restaurant.id}
            restaurant={restaurant}
            getRestaurant={getRestaurant(restaurant.id)}
            deleteRestaurant={deleteRestaurant(restaurant.id)}
            profile={profile}
            reviews={reviews}
          />
        ))}
      </div>
    );
  }
}

export default RestaurantList;
