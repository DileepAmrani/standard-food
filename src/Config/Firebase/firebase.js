import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDYM3FP7x9jcjGGuxQxs-4huZr7toehfyk",
    authDomain: "standard-food.firebaseapp.com",
    databaseURL: "https://standard-food.firebaseio.com",
    projectId: "standard-food",
    storageBucket: "",
    messagingSenderId: "787199258217",
    appId: "1:787199258217:web:8203615ff00197ccaa7cf8"
  };
 const firebaseApp = firebase.initializeApp(firebaseConfig)

export {
  firebaseApp
}  