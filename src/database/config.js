import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBh4SCFXqnio6QS__xSNmJLYHN5mKkO_g8",
  authDomain: "reduxtagram-tried-again.firebaseapp.com",
  databaseURL: "https://reduxtagram-tried-again.firebaseio.com",
  projectId: "reduxtagram-tried-again",
  storageBucket: "reduxtagram-tried-again.appspot.com",
  messagingSenderId: "276988813583"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };