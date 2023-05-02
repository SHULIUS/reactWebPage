import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const app = firebase.initializeApp({
  "projectId": "primerproyectoreact-c83b7",
  "appId": "1:388961035395:web:29755d6370e4c68ea967b6",
  "storageBucket": "primerproyectoreact-c83b7.appspot.com",
  "apiKey": "AIzaSyDz6pcp_RBtFr5MoWoK-1cXt2TBd-UCkL8",
  "authDomain": "primerproyectoreact-c83b7.firebaseapp.com",
  "messagingSenderId": "388961035395",
  "measurementId": "G-7TTQYTQ0GW"
});

export const auth = firebase.auth();
