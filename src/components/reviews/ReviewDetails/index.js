import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import Ratings from '../../Ratings';

class ReviewDetails extends React.Component {
  render() {
    const { auth, restaurant, review } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />;
    if (review && restaurant) {
      return (
      <div className="section review-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{restaurant.name}</span>
            <Ratings data={review} />
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {review.createdBy}</div>
            <div>{moment(new Date(review.created)).format('YYYY-MM-DD')}</div>
          </div>
        </div>
      </div>
      );
    }
    return (
      <div className="container center">
        <p>Loading Review...</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line prefer-destructuring
  const id = ownProps.match.params.id;
  // eslint-disable-next-line prefer-destructuring
  const restaurants = state.firestore.data.restaurants;
  // eslint-disable-next-line prefer-destructuring
  const reviews = state.firestore.data.reviews;
  // const restaurantReviews = reviews.filter(rev => rev.rest_id === id);
  const restaurant = restaurants ? restaurants[id] : null;
  return {
    reviews,
    restaurant,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([
    { collection: 'restaurants' },
    { collection: 'reviews' },
  ]),
)(ReviewDetails);
