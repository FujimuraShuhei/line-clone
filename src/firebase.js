import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCWpXGGoWS_kYiwiqHrgOf7I-YjSkhyHfs',
  authDomain: 'line-d617d.firebaseapp.com',
  projectId: 'line-d617d',
  storageBucket: 'line-d617d.appspot.com',
  messagingSenderId: '44142701351',
  appId: '1:44142701351:web:3a14e752b720c5cac65702',
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
