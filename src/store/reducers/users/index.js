import types from '../../types/types';

function review(state = { user: {} }, action) {
  switch (action.type) {
    case 'SET_REST_ID':
      return {
        ...state,
        review: action.payload,
      };
    case 'CREATE_RESTAURANT_SUCCESS':
      return {
        state,
        data: action.payload,
      };
    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        review: action.payload,
      };
    case 'ADD_USER_ADMIN_SUCCESS':
      return {
        ...state,
        review: action.payload,
      };
    case 'ADD_USER_ADMIN_ERROR':
      return {
        ...state,
        review: action.payload,
      };
    case 'CREATE2_USER_ADMIN_SUCCESS':
      return {
        ...state,
        review: action.payload,
      };
    case 'CREATE2_USER_ADMIN_ERROR':
      return {
        ...state,
        review: action.payload,
      };
    default:
      return state;
  }
}

export default review;
