import firebase from 'firebase';

var config = {
 apiKey: "AIzaSyDab8a3gbGIaK-tK_sPkdShlHcUYRQaIYY",
 authDomain: "ss-consultancy.firebaseapp.com",
 databaseURL: "https://ss-consultancy.firebaseio.com",
 projectId: "ss-consultancy",
 storageBucket: "ss-consultancy.appspot.com",
 messagingSenderId: "240871765623"
};

firebase.initializeApp(config);

var messageRef = firebase.database().ref('messages');

export const saveData = (data) => {
 let newData = messageRef.push();
     newData.set({
      name: data.name,
      email: data.email,
      contact: data.contact
     });
}
