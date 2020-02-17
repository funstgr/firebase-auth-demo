import React from 'react';
import PropTypes from 'prop-types';
import '../reviews/Review/review.css';

class EmptyReview extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="section Restaurant-details">
        <div className="card z-depth-0">
          <div className="card-content">
            {data}
          </div>
        </div>
      </div>
    );
  }
}

export default EmptyReview;
