import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import './add-review.css';
import { Redirect } from 'react-router-dom';
import { createReview } from '../../../store/actions/reviewActions';

import {
  validateComment, validateRating,
} from '../../../utils/validations/validations';

class AddReview extends React.Component {
  constructor(props, context) {
    super(props, context);
    // default component state not in redux store
    this.state = {
      wrapperClass: 'form-group nodisplay',
      chkbxClass: 'form-field',
      ratingError: ' ',
      commentError: ' ',
      rating: '',
      comment: '',
      visited: '',
    };
  }

  getRestId() {
    const url = window.location.href;
    const li = url.lastIndexOf('/') + 1;
    const id = url.substr(li);
    return id;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    if (e.target.id === 'comment') {
      this.validateComment(e);
    } else if (e.target.id === 'rating') {
      this.validateRating(e);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      review, postReview, history,
    } = this.props;
    const isValidInputs = this.validateInputs();
    const restId = this.getRestId();
    if (isValidInputs) {
      // eslint-disable-next-line prefer-destructuring
      const userReview = {
        rest_id: restId,
        comment: this.state.comment,
        rating: this.state.rating,
        // visited: this.state.visited,
        visited: Date.now(),
      };
      postReview(userReview);
      history.push(`/restaurant/${restId}`);
    }
  }

  validateInputs = () => {
    let valid = false;
    const isValidComment = validateComment(this.state.comment);
    this.setState({ usernameError: isValidComment ? '' : 'Must be a minimum of 4 characters and alphanumeric' });
    const isValidRating = validateRating(this.state.rating);
    this.setState({ passwordError: isValidRating ? '' : 'Must be a number between 1 and 5' });
    valid = isValidComment && isValidRating;
    return valid;
  }

  validateComment = (event) => {
    const isValidComment = validateComment(event.target.value);
    this.setState({ commentError: isValidComment ? '' : 'Must be a minimum of 4 characters and alphanumeric' });
    this.setState({ comment: event.target.value });
  }

  validateRating = (e) => {
    const isValidRating = validateRating(e.target.value);
    this.setState({ ratingError: isValidRating ? '' : 'Must be a number between 1 and 5' });
    this.setState({ rating: isValidRating ? e.target.value : '' });
  }

  render() {
    const { auth, restaurants } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />;
    const restId = this.getRestId();
    const restaurantName = restaurants ? restaurants[restId].name : 'Test Restaurant';
    return (
        <div className="container  section add-review-container">
          <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add a Review for {restaurantName} </h5>
          <div className="review-input">
            <div className="input-field">
              <input type="text" id='comment' onChange={this.handleChange} />
              <label htmlFor="name">Comment</label>
            </div>
            <div className='invalid-feedback'>&nbsp;{this.state.commentError}</div>
          </div>
          <div className="review-input">
            <div className="input-field">
              <input type="text" id='rating' onChange={this.handleChange} />
              <label htmlFor="name">Rating value from 1 to 5 stars</label>
            </div>
            <div className='invalid-feedback'>&nbsp;{this.state.ratingError}</div>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Post Review</button>
          </div>
        </form>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    review,
  } = state;
  return {
    review,
    restaurants: state.firestore.data.restaurants,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => ({
  postReview: (review) => { dispatch(createReview(review)); },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'restaurants' },
  ]),
)(AddReview);
