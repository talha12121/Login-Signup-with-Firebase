const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

// firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { doc, setDoc,getFirestore }  from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyD_bt-WXWzObwUcU3xwSSzAVq1gS-be4zw",
    authDomain: "authenicated-web.firebaseapp.com",
    projectId: "authenicated-web",
    storageBucket: "authenicated-web.appspot.com",
    messagingSenderId: "398667582596",
    appId: "1:398667582596:web:9769dd139d7e4a279c46d1",
    measurementId: "G-89RE87PNPY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  const db=getFirestore();
 const submit = ()=>{
  const name = document.getElementById("name");
  const signup_email = document.getElementById("signup-email");
  const signup_pass = document.getElementById("signup-pass");

createUserWithEmailAndPassword(auth, signup_email.value, signup_pass.value)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user",user)
    await setDoc(doc(db, "users", "user.uid"), {
      name: name.value,
      email: signup_email.value,
      password: signup_pass.value,
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error")
    // ..
  });
  }
const btn = document.getElementById("submit");
btn.addEventListener("click", submit);
   const login =()=>{
    const login_email = document.getElementById("login-email");
    const login_pass = document.getElementById("login-pass");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, login_email.value, login_pass.value)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user", user);
    window.location="new.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error");
    console.log(errorMessage)
  });
   }
   const loginBtn = document.getElementById("login");
   loginBtn.addEventListener("click", login);
                      //  FOR CUURENT USER DATA
  //  window.onload = async () => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       sendEmailVerification(auth.currentUser)
  //         .then(() => {
  //           console.log("Email sent");
            
  //         })
  //         .catch((err) => console.log(err));
  //       console.log(auth.currentUser);
  //       // console.log("user", user);
  //     } else {
  //       console.log("not login");
  //     }
  //   });
  // };
  