import types from '../../types/types';

function location(state = { location: {} }, action) {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
}

export default location;
