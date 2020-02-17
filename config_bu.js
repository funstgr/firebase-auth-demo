import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDjsIlpAA4ab8-v8fyKNMT5elkff_PMdXg',
  authDomain: 'fir-auth-demo-755c2.firebaseapp.com',
  databaseURL: 'https://fir-auth-demo-755c2.firebaseio.com',
  projectId: 'fir-auth-demo-755c2',
  storageBucket: '',
  messagingSenderId: '362438276723',
  appId: '1:362438276723:web:c8ce072df851dde39d1c06',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
