import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDKrG9Qn3C4hRlIFyeGf8msUR0j555MYMk",
  authDomain: "spare-part-handbook.firebaseapp.com",
  databaseURL: "https://spare-part-handbook-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spare-part-handbook",
  storageBucket: "spare-part-handbook.appspot.com",
  messagingSenderId: "513488152489",
  appId: "1:513488152489:web:267eb5c8574252468686b8",
  measurementId: "G-363TRF8BYW"
};

// Initialize Firebase
const app = initializeApp();

const dbRef = ref(getDatabase(firebaseConfig.databaseURL));
console.log(dbRef);

get(child(dbRef, ``)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
