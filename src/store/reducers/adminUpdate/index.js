const initState = {
  adminUpdateError: null,
};

const adminUpdateReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADMIN_UPDATE_USER_SUCCESS':
      console.log('update success');
      return {
        ...state,
        adminUpdateError: 'ADMIN_UPDATE_SUCCESS',
      };

    case 'ADMIN_UPDATE_USER_ERROR':
      console.log('update error');
      console.log(action.message);
      return {
        ...state,
        adminUpdateError: action.message,
      };

    default:
      return state;
  }
};

export default adminUpdateReducer;
