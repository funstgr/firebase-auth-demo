/* eslint-disable promise/always-return */
const functions = require('firebase-functions')
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.addAdminRole = functions.https.onCall((data, context) => {
  // check request is made by an admin
  if ( context.auth.token.admin !== true ) {
    return { error: 'Only admins can add other admins' }
  }
  // get user and add admin custom claim
  return admin.auth().getUserByEmail(data.email).then(user => {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: true
    })
  }).then(() => db.collection('users').doc(data.uid).update({
    role: 'admin',
    updated: Date.now(),
    updatedBy: data.updatedBy,
  })).then((resp) => {
    return {
      obj: resp,
      message: `Success! ${data.email} has been made an admin.`
    }
  }).catch(err => {
    return err;
  });
});

exports.removeAdminRole = functions.https.onCall((data, context) => {
  // check request is made by an admin
  if ( context.auth.token.admin !== true ) {
    return { error: 'Only admins can add other admins' }
  }
  // get user and add admin custom claim
  return admin.auth().getUserByEmail(data.email).then(user => {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: false
    })
  }).then(() => db.collection('users').doc(data.uid).update({
    role: 'user',
    updated: Date.now(),
    updatedBy: data.updatedBy,
  })).then((resp) => {
    return {
      obj: resp,
      message: `Success! ${data.email} has been made an admin.`
    }
  }).catch(err => {
    return err;
  });
});

exports.getUserByUID = functions.https.onCall((data, context) => {
  // check request is made by an admin
  if ( context.auth.token.admin !== true ) {
    return { error: 'Only admins can add other admins' }
  }
  admin.auth().getUser(data.uid)
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    return { data: userRecord }
  })
  .catch(function(err) {
    return { err }
  });
});

exports.getUserByEmail = functions.https.onCall((data, context) => {
  // check request is made by an admin
  if ( context.auth.token.admin !== true ) {
    return { error: 'Only admins can add other admins' }
  }
  admin.auth().getUserByEmail(data.email)
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    return { data: userRecord }
  })
  .catch(function(err) {
   return  err;
  });
});

exports.createUser = functions.https.onCall((data, context) => {
  // check request is made by an admin
  if ( context.auth.token.admin !== true ) {
    return { error: 'Only admins can add other admins' }
  }
  const email = data.email;
  const password = data.password;
  const initials = data.firstName[0] + data.lastName[0];
  const firstname = data.firstName;
  const lastname = data.lastName;
  return admin.auth().createUser({
    email,
    password,
  }).then(resp => db.collection('users').doc(resp.uid).set({
    username: email,
    firstname,
    lastname,
    initials,
    role: 'user',
    created: Date.now(),
  })).then((doc) => {
    return doc
  }).catch(err => {
    return err;
  });
});

exports.updateUser = functions.https.onCall((data, context) => {
  // check request is made by an admin
  if ( context.auth.token.admin !== true ) {
    return { error: 'Only admins can add other admins' }
  }
  const uid = data.uid;
  const email = data.email;
  const password = data.password;
  const initials = data.firstName[0] + data.lastName[0];
  const firstname = data.firstName;
  const lastname = data.lastName;
  // const updatedBy = data.updatedBy;
  return admin.auth().updateUser(uid, {
    email,
    password,
  }).then(resp => db.collection('users').doc(resp.uid).update({
    username: email,
    firstname,
    lastname,
    initials,
    updated: Date.now(),
  })).then((doc) => {
    return doc
  }).catch(err => {
    return err;
  });
});



exports.deleteUser = functions.https.onCall((data, context) => {
  // check request is made by an admin
  if ( context.auth.token.admin !== true ) {
    return { error: 'Only admins can add other admins' }
  }
  const uid = data.uid;
  return admin.auth().deleteUser(uid)
  .then(resp => db.collection('users').doc(uid).delete())
  .then((res) => {
    return {message: `Success! ${uid} has removed.`}
  }).catch(err => {
    return err;
  });
});

exports.getUsers = functions.https.onRequest((req,res) => {
  db.collection('users').get().then((data) => {
      let users = [];
      data.forEach((doc) => {
          users.push(doc.data());
      })
      return res.json(users);
  })
  .catch((err) => console.error(err));
});

exports.getRestaurants = functions.https.onRequest((req,res) => {
  db.collection('restaurants').orderBy('name').get().then((data) => {
      let restaurants = [];
      data.forEach((doc) => {
          restaurants.push(doc.data());
      })
      return res.json(restaurants);
  })
  .catch((err) => console.error(err));
});

exports.getReviewsByRestaurant = functions.https.onRequest((req,res) => {
  db.collection('reviews').orderBy('rest_id', 'desc').get().then((data) => {
      let reviews = [];
      data.forEach((doc) => {
        reviews.push(doc.data());
      })
      return res.json(reviews);
  })
  .catch((err) => console.error(err));
});

