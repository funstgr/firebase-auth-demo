const initState = {
  adminSignupError: null,
};

const adminSignupReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADMIN_SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        adminSignupError: 'ADMIN_SIGNUP_SUCCESS',
      };

    case 'ADMIN_SIGNUP_ERROR':
      console.log('signup error');
      console.log(action.message);
      return {
        ...state,
        adminSignupError: action.message,
      };

    default:
      return state;
  }
};

export default adminSignupReducer;
