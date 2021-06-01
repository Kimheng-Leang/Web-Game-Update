import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyCD_Ib2YFvxNsEnH9Ki1_qc4OhliCHcyG0",
	authDomain: "anachak-game.firebaseapp.com",
	projectId: "anachak-game",
	storageBucket: "anachak-game.appspot.com",
	messagingSenderId: "60444949798",
	appId: "1:60444949798:web:bf8a199d272f1878c715e7",
	measurementId: "G-QT2YKTRFFM"
};

//Init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectAuth, timestamp};
