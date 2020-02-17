export const createRestaurant = restaurant => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  // eslint-disable-next-line prefer-destructuring
  const profile = getState().firebase.profile;
  restaurant.created_by = profile.username;
  restaurant.rating = 0;
  restaurant.created = Date.now();
  firestore.collection('restaurants').add({
    ...restaurant,
  }).then(() => {
    dispatch({ type: 'CREATE_RESTAURANT_SUCCESS', payload: restaurant });
  }).catch((err) => {
    dispatch({ type: 'CREATE_RESTAURANT_ERROR' }, err);
  });
};

export const fetchRestaurants = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('restaurants').get().then((docs) => {
    dispatch({ type: 'FETCH_RESTAURANTS_SUCCESS', payload: docs });
  }).catch((err) => {
    dispatch({ type: 'FETCH_RESTAURANTS_ERROR' }, err);
  });
};

export const updateRestaurant = restaurant => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  // eslint-disable-next-line prefer-destructuring
  const profile = getState().firebase.profile;
  restaurant.updated_by = profile.username;
  restaurant.updated = Date.now();
  if (profile.role === 'admin') {
    firestore.collection('restaurants').doc(restaurant.id).update({
      ...restaurant,
    }).then(() => {
      dispatch({ type: 'UPDATE_RESTAURANT_SUCCESS', payload: restaurant });
    })
      .catch((err) => {
        dispatch({ type: 'UPDATE_RESTAURANT_ERROR' }, err);
      });
  }
};

export const deleteRestaurant = restaurantId => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  // eslint-disable-next-line prefer-destructuring
  const profile = getState().firebase.profile;
  if (profile.role === 'admin') {
    firestore.collection('restaurants').doc(restaurantId).delete()
      .then(() => {
        dispatch({ type: 'DELETE_RESTAURANT_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_RESTAURANT_ERROR' }, err);
      });
  }
};
