import firebase from "firebase";


const firebaseConfig = {


};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const profileRef = db.ref("profile");

export const chatsRef = db.ref("chats");

export const messagesRef = db.ref("messages");