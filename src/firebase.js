import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD7oYTbTtH_YmXYKb3TulJBYTIoIRuWBvc',
  authDomain: 'react-imessage-clone.firebaseapp.com',
  databaseURL: 'https://react-imessage-clone.firebaseio.com',
  projectId: 'react-imessage-clone',
  storageBucket: 'react-imessage-clone.appspot.com',
  messagingSenderId: '857026748850',
  appId: '1:857026748850:web:8ca6296438eaadbcc2c4ab',
  measurementId: 'G-MGKD4586J3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
