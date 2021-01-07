 import firebase from 'firebase';
 
 var firebaseConfig = {
    apiKey: "AIzaSyAIvkdj-OrpFzmpL5VSJQDvrQx9TGU45m4",
    authDomain: "authlogin-4dfba.firebaseapp.com",
    projectId: "authlogin-4dfba",
    storageBucket: "authlogin-4dfba.appspot.com",
    messagingSenderId: "753436579138",
    appId: "1:753436579138:web:d3ef9270ea82a0d71ae4db"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;