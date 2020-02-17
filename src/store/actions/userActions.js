

export const createUser = user => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  // eslint-disable-next-line prefer-destructuring
  const profile = getState().firebase.profile;
  user.created = Date.now();
  user.updated = Date.now();
  user.updated_by = profile.username;
  firestore.collection('users').add({
    ...user,
  }).then(() => {
    dispatch({ type: 'CREATE_USER_SUCCESS', payload: user });
  }).catch((err) => {
    dispatch({ type: 'CREATE_USER_ERROR' }, err);
  });
};

export const createUser2 = user => (dispatch, getState, { getFirebase }) => {
  // eslint-disable-next-line prefer-destructuring
  const profile = getState().firebase.profile;
  console.log('user');
  console.log(user);
  // eslint-disable-next-line prefer-destructuring
  const functions = getFirebase().functions();
  const createUsr = functions.httpsCallable('createUser');
  createUsr(user)
    .then((result) => {
      console.log(result);
      if (result.data.errorInfo) {
        console.log(result.data.errorInfo);
        throw result;
      }
      dispatch({ type: 'ADMIN_SIGNUP_SUCCESS' });
    })
    .catch((err) => {
      console.log('err');
      console.log(err.data.errorInfo.message);
      dispatch({ type: 'ADMIN_SIGNUP_ERROR', message: err.data.errorInfo.message });
    });
};

export const updateUser = user => (dispatch, getState, { getFirebase }) => {
  // eslint-disable-next-line prefer-destructuring
  const profile = getState().firebase.profile;
  // eslint-disable-next-line prefer-destructuring
  const functions = getFirebase().functions();
  const updateUsr = functions.httpsCallable('updateUser');
  // user.updated_by = profile.username;
  if (profile.role === 'admin') {
    updateUsr(user)
      .then((result) => {
        console.log(result);
        if (result.data.errorInfo) {
          throw result;
        }
        dispatch({ type: 'ADMIN_UPDATE_USER_SUCCESS', msg: result });
      })
      .catch((err) => {
        dispatch({ type: 'ADMIN_UPDATE_USER_ERROR', message: err.data.errorInfo.message });
      });
  }
};

export const deleteUser = userId => (dispatch, getState, { getFirebase }) => {
  // eslint-disable-next-line prefer-destructuring
  const profile = getState().firebase.profile;
  const functions = getFirebase().functions();
  const deleteUsr = functions.httpsCallable('deleteUser');
  if (profile.role === 'admin') {
    deleteUsr(userId)
      .then((result) => {
        dispatch({ type: 'DELETE_USER_SUCCESS', msg: result });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_USER_ERROR' }, err);
      });
  }
};

export const addAdminRole = data => (dispatch, getState, { getFirebase }) => {
  // eslint-disable-next-line prefer-destructuring
  const profile = getState().firebase.profile;
  // eslint-disable-next-line prefer-destructuring
  const functions = getFirebase().functions();
  const addAdmin = functions.httpsCallable('addAdminRole');
  if (profile.role === 'admin') {
    addAdmin(data)
      .then((result) => {
        console.log(result);
        dispatch({ type: 'ADD_USER_ADMIN_SUCCESS' });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: 'ADD_USER_ADMIN_ERROR' });
      });
  }
};

export const removeAdminRole = data => (dispatch, getState, { getFirebase }) => {
  // eslint-disable-next-line prefer-destructuring
  const profile = getState().firebase.profile;
  // eslint-disable-next-line prefer-destructuring
  const functions = getFirebase().functions();
  const removeAdmin = functions.httpsCallable('removeAdminRole');
  if (profile.role === 'admin') {
    removeAdmin(data)
      .then((result) => {
        console.log(result);
        dispatch({ type: 'REMOVE_USER_ADMIN_SUCCESS' });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: 'REMOVE_USER_ADMIN_ERROR' });
      });
  }
};
