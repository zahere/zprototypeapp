import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

  var config = {
     apiKey: "AIzaSyCQN9eOGx4LjSGf6yWvB4defBEwWOgvl3I",
     authDomain: "z-prototype-b2141.firebaseapp.com",
     databaseURL: "https://z-prototype-b2141.firebaseio.com",
     projectId: "z-prototype-b2141",
     storageBucket: "",
     messagingSenderId: "6209076546",
     appId: "1:6209076546:web:9c2485cb95d25ad1"
  };
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}