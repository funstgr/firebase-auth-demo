export const createReview = review => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  // eslint-disable-next-line prefer-destructuring
  const profile = getState().firebase.profile;
  review.reviewer = profile.initials;
  review.created = Date.now();
  review.updated = Date.now();
  review.updated_by = '';
  firestore.collection('reviews').add({
    ...review,
  }).then(() => {
    dispatch({ type: 'CREATE_REVIEW_SUCCESS', payload: review });
  }).catch((err) => {
    dispatch({ type: 'CREATE_REVIEW_ERROR' }, err);
  });
};

export const updateReview = review => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  // eslint-disable-next-line prefer-destructuring
  const profile = getState().firebase.profile;
  const rev = review.review;
  rev.updated_by = profile.username;
  rev.updated = Date.now();
  if (profile.role === 'admin') {
    firestore.collection('reviews').doc(review.id).update({
      ...review,
    })
      .then((doc) => {
        console.log(doc);
        dispatch({ type: 'UPDATE_REVIEW_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'UPDATE_REVIEWQ_ERROR' }, err);
      });
  }
};

export const deleteReview = reviewId => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  // eslint-disable-next-line prefer-destructuring
  const profile = getState().firebase.profile;
  if (profile.role === 'admin') {
    firestore.collection('reviews').doc(reviewId).delete()
      .then(() => {
        dispatch({ type: 'DELETE_REVIEW_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_REVIEW_ERROR' }, err);
      });
  }
};
