import firebase from "firebase";

var firebaseConfig = 
{
    apiKey: "AIzaSyAqVUx7dK-XcxB8KLVQTiOE-mCcwFkja0M",
    authDomain: "login-542dd.firebaseapp.com",
    databaseURL: "https://login-542dd.firebaseio.com",
    projectId: "login-542dd",
    storageBucket: "login-542dd.appspot.com",
    messagingSenderId: "818030140327",
    appId: "1:818030140327:web:624c2137f3d21de221f482"
};
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;