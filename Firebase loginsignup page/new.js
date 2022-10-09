import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { doc, setDoc,getFirestore , getDocs , collection,} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyD_bt-WXWzObwUcU3xwSSzAVq1gS-be4zw",
    authDomain: "authenicated-web.firebaseapp.com",
    projectId: "authenicated-web",
    storageBucket: "authenicated-web.appspot.com",
    messagingSenderId: "398667582596",
    appId: "1:398667582596:web:9769dd139d7e4a279c46d1",
    measurementId: "G-89RE87PNPY"
  };
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();
 const db=getFirestore();
 
 onAuthStateChanged(auth, async (user) => {
       const uid = user.uid;
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
    const new_data =document.getElementById("new_data").innerHTML +=`
    <div class="js">
    <h1>WELCOME TO PROFILE</h1>
  <p>Name : ${doc.data().name}</p>
  <p>Email : ${doc.data().email}</p>
  <p class="uid">UID : ${uid}</p>
  </div>`
});
});