import types from '../../types/types';

function review(state = { review: {} }, action) {
  switch (action.type) {
    case 'SET_REST_ID':
      return {
        ...state,
        review: action.payload,
      };
    case 'DELETE_REVIEW_SUCCESS':
      return {
        ...state,
        review: action.payload,
      };
    case types.FETCH_REVIEW:
    default:
      return state;
  }
}

export default review;
