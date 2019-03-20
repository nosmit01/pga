import * as firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAIm3FNX3LqDNsKf0KFEkzOiPLaty1IydI",
  authDomain: "pgagolf-a6467.firebaseapp.com",
  databaseURL: "https://pgagolf-a6467.firebaseio.com",
  projectId: "pgagolf-a6467",
  storageBucket: "pgagolf-a6467.appspot.com",
  messagingSenderId: "145282676603"
}
firebase.initializeApp(config)
const db = firebase.firestore()
export default db