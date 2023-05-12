// Import the functions you need from the SDKs you need

import * as firebase from 'firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



let database;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBIDUqxSF17Gyn-yfEGTnsOe-sLZjAkOg",
  authDomain: "inkarthon.firebaseapp.com",
  projectId: "inkarthon",
  storageBucket: "inkarthon.appspot.com",
  messagingSenderId: "790929260071",
  appId: "1:790929260071:web:fa7446c32983f8ec40d802"
};

export const getPending = () => {
    return database.ref('/isPending').once('value')
}


export const getTeamList = () => {
    return database.ref('/teams').once('value')
}

export const updateScore = (teamIdx, data) => {
    return database.ref(`/teams/${teamIdx}/scores`).update(data);
}

export const getScore = (teamIdx) => {
    return database.ref(`/teams/${teamIdx}/scores`).once('value')
}

export const fire = () => {
    console.log("is work?")
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
     database = firebase.database();
    //  const messaging = firebase.messaging();
    //  console.log(messaging);
}
