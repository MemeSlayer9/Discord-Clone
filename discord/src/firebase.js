import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDBGvep7RRA1Hi89Ihgg0mNBRuMHmXzFVY",
    authDomain: "discord-clone-7ea46.firebaseapp.com",
    projectId: "discord-clone-7ea46",
    storageBucket: "discord-clone-7ea46.appspot.com",
    messagingSenderId: "892802542961",
    appId: "1:892802542961:web:7780250848f4266d355ad0",
    measurementId: "G-Z8THWTN9S0"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db; 
