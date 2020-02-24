import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBOWGjfRkTXSy3ycQGvLyLf3qnmrXUAdZY',
  authDomain: 'my-blog-posts.firebaseapp.com',
  databaseURL: 'https://my-blog-posts.firebaseio.com',
  projectId: 'my-blog-posts',
  storageBucket: 'my-blog-posts.appspot.com',
  messagingSenderId: '882626289159',
  appId: '1:882626289159:web:68055e44d0d24f47e7d4a2',
  measurementId: 'G-GVXRKTBCR5',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

window.firebase = firebase;

export default firebase;
