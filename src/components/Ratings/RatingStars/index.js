import React from 'react';

// Empty star: ☆
// Half Star ✬
// Highlighted star: ★
class RatingsStars extends React.PureComponent {
  getStar = (val) => {
    let star = '☆';
    if (val === 1) {
      star = '★';
    } else if (val === 0.5) {
      star = '✬';
    }
    return star;
  }

  render() {
    const { rating } = this.props;
    const star = this.getStar(rating);
    return <span>{star}</span>;
  }
}

export default RatingsStars;
