import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import restaurantReducer from './restaurantReducer';
import reviewReducer from './review';
import locationReducer from './location';
import adminSignupReducer from './adminSignup';
import adminUpdateReducer from './adminUpdate';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  review: reviewReducer,
  location: locationReducer,
  restaurants: restaurantReducer,
  adminSignup: adminSignupReducer,
  adminUpdate: adminUpdateReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;

// the key name will be the data property on the state object
