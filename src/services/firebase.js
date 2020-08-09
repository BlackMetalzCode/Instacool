import * as firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyC_eUe9_kayspTKHdkVBimcaPi9BP4bcCc",
  authDomain: "instacool-49c8e.firebaseapp.com",
  databaseURL: "https://instacool-49c8e.firebaseio.com",
  projectId: "instacool-49c8e",
  storageBucket: "instacool-49c8e.appspot.com",
  messagingSenderId: "983610109219",
  appId: "1:983610109219:web:adb120c709f9778fe6f096",
  measurementId: "G-QVDJY7GVHX"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()