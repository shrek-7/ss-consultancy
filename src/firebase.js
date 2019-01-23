import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDHgqtGcSJMERAZqMxvSENPD88z2w9vjRA",
    authDomain: "ss-consultancy-a8459.firebaseapp.com",
    databaseURL: "https://ss-consultancy-a8459.firebaseio.com",
    projectId: "ss-consultancy-a8459",
    storageBucket: "",
    messagingSenderId: "925445712198"
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
