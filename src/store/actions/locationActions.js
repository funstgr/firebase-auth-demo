const setLocation = data => (dispatch) => {
  dispatch({
    type: 'SET_LOCATION',
    payload: {
      data,
    },
  });
};

export default setLocation;
