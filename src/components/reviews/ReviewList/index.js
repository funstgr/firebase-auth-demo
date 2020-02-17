import React from 'react';
import PropTypes from 'prop-types';
import Review from '../Review';
import EmptyReview from '../../EmptyReview';
import MostRecentReview from '../MostRecentReview';
import sortArray from '../../../utils/sort/sort';
import './review.css';

class ReviewList extends React.Component {
  state = {
    mostRecentReview: '',
  };

  getRestaurantReviews = () => {
    const { reviews } = this.props;
    let restaurantReviewsList = [];
    const keys = reviews ? Object.keys(reviews) : null;
    const id = this.getRestId();
    if (keys !== null) {
      keys.forEach((key) => {
        if (reviews[key] !== null) {
          restaurantReviewsList.push(reviews[key]);
        }
        if (reviews[key] !== null) reviews[key].key = key;
      });
    }
    if (restaurantReviewsList.length > 0) {
      restaurantReviewsList = restaurantReviewsList.filter(rev => rev.rest_id === id);
    }

    return restaurantReviewsList;
  };

  getRevisedReviewList = (restaurantReviews) => {
    let revisedReviewList = restaurantReviews;
    if (revisedReviewList.length > 0) {
      const starSort = 'rating';
      const starReviewList = sortArray(starSort, revisedReviewList);
      // reviewList = reviews.data.reviews;
      if (revisedReviewList.length >= 3) {
        revisedReviewList = [starReviewList[0], starReviewList.pop()];
      } else if (revisedReviewList.length === 2) {
        revisedReviewList = [starReviewList[0], starReviewList.pop()];
      } else {
        revisedReviewList = [starReviewList[0]];
      }
    } else {
      const data = 'There are no reviews for this Restaurant';
      revisedReviewList = <EmptyReview data={data} />;
    }
    return revisedReviewList;
  }

  getMostRecentReview = (restaurantReviews) => {
    const dateSort = 'created';
    let mostRecentReview = {};
    if (restaurantReviews.length > 0) {
      let dateReviewList = [];
      dateReviewList = sortArray(dateSort, restaurantReviews);
      // eslint-disable-next-line prefer-destructuring
      mostRecentReview = dateReviewList[0];
    }
    return mostRecentReview;
  }

  getRestId() {
    const url = window.location.href;
    const li = url.lastIndexOf('/') + 1;
    const id = url.substr(li);
    return id;
  }

  getReviewList = (revisedReviewList) => {
    const { deleteReview, profile } = this.props;
    let reviewList = [];
    reviewList = revisedReviewList.length > 0 ? revisedReviewList.map(rev => <Review key={rev.id}
      profile={profile}
      data={rev}
      onClick={deleteReview(rev.id)}/>) : reviewList;
    return reviewList;
  }

  render() {
    const { profile } = this.props;
    const restaurantReviews = this.getRestaurantReviews();
    const revisedReviewList = this.getRevisedReviewList(restaurantReviews);
    const mostRecentReview = this.getMostRecentReview(restaurantReviews);
    const reviewList = profile.role === 'admin'
      ? this.getReviewList(restaurantReviews) : this.getReviewList(revisedReviewList);
    return (
      <div className = 'section '>
        <ul className="card z-depth-0">
          {reviewList.length > 0 && reviewList}
          {profile.role !== 'admin' && <h4 className="center">Most Recent Review</h4>}
          {profile.role !== 'admin' && <MostRecentReview data={mostRecentReview} />}
        </ul>
      </div>
    );
  }
}

ReviewList.propTypes = {};

export default ReviewList;
