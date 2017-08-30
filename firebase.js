var signedIn = 0;

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



console.log("signing in");
if (!signedIn) {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);

  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
      console.log("signed in: " + token);
      signedIn = 1;
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}




console.log("done signing in");
