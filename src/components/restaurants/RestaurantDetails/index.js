import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import moment from 'moment';
import Ratings from '../../Ratings';
import ReviewList from '../../reviews/ReviewList';
import sumArrayKey from '../../../utils/arrayUtils/sum';

import { deleteReview } from '../../../store/actions/reviewActions';

class RestaurantDetails extends React.Component {
  deleteReview = id => (e) => {
    const { delReview, history } = this.props;
    e.preventDefault();
    delReview(id);
  }

  addReview = () => {
    const { setRestId, review, history } = this.props;
    const url = window.location.href;
    const li = url.lastIndexOf('/') + 1;
    const id = url.substr(li);
    history.push(`/addreview/${id}`);
  }

  getRestId() {
    const url = window.location.href;
    const li = url.lastIndexOf('/') + 1;
    const id = url.substr(li);
    return id;
  }

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
      restaurant, auth, reviews, review, profile, id,
    } = this.props;
    console.log(id);
    const data = reviews ? this.getRating(id) : { rating: 0 };
    if (!auth.uid) return <Redirect to='/signin' />;
    if (restaurant) {
      return (
        <div className="container restaurant-details-container">
      <div className="section restaurant-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{restaurant.name}</span>
            <Ratings data={data} ratingType='Average'/>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {restaurant.createdBy}</div>
            <div>{moment(new Date(restaurant.created)).format('YYYY-MM-DD')}</div>
            <button onClick={this.addReview} className="brand-logo">Add A Review</button>
          </div>
        </div>
      </div>
      <ReviewList
          profile={profile}
          reviews={reviews}
          review={review}
          deleteReview={reviewId => this.deleteReview(reviewId)}
      />
      </div>
      );
    }
    return (
      <div className="container center">
        <p>Loading Restaurant...</p>
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
  const restaurant = restaurants ? restaurants[id] : null;
  // eslint-disable-next-line prefer-destructuring
  const review = state.review;
  return {
    id,
    review,
    restaurant,
    reviews: state.firestore.ordered.reviews,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = dispatch => ({
  delReview: reviewId => dispatch(deleteReview(reviewId)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'restaurants', orderBy: ['rating', 'desc'] },
    { collection: 'reviews', orderBy: ['rating', 'desc'] },
  ]),
)(RestaurantDetails);
