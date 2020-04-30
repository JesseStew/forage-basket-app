import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDaEogUnObjqoTqE0AZPWsOkIyUpJucUtE",
  authDomain: "farmbook-34ed0.firebaseapp.com",
  databaseURL: "https://farmbook-34ed0.firebaseio.com",
  projectId: "farmbook-34ed0",
  storageBucket: "farmbook-34ed0.appspot.com",
  messagingSenderId: "466190013989",
  appId: "1:466190013989:web:a7fcc3e0fae37106d0d1cc",
  measurementId: "G-Y9EKWN6VEK"
}

// Get a Firestore instance
export const db = firebase.initializeApp(firebaseConfig).firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }