const initState = {};

const restaurantReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_RESTAURANT_SUCCESS':
      return {
        state,
        data: action.payload,
      };
    case 'CREATE_RESTAURANT_ERROR':
      return state;
    default:
      return state;
  }
};

export default restaurantReducer;
