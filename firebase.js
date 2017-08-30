// Initialize Firebase
var config = {
  apiKey: "AIzaSyBEFgCJYx1yHWZiqFVLyydoV_Ixd8HTAIg",
  authDomain: "picsandcr.firebaseapp.com",
  databaseURL: "https://picsandcr.firebaseio.com",
  projectId: "picsandcr",
  storageBucket: "picsandcr.appspot.com",
  messagingSenderId: "425685988468"
};
firebase.initializeApp(config);
console.log("firebase loaded!");

var provider = new firebase.auth.GoogleAuthProvider();

console.log("signing in");
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  console.log("signing in success: " + user);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  console.log("failed to sign in: " + errorCode + ": " + errorMessage);
});

console.log("done signing in");
