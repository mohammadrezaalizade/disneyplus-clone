import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG-FNuVsgEaWGY9zo_B7bQt9EmM64wfsQ",
  authDomain: "disneyplus-clone-7af63.firebaseapp.com",
  databaseURL: "https://disneyplus-clone-7af63-default-rtdb.firebaseio.com",
  projectId: "disneyplus-clone-7af63",
  storageBucket: "disneyplus-clone-7af63.appspot.com",
  messagingSenderId: "442374683474",
  appId: "1:442374683474:web:a25085dfa20e8e4f5f588b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
// getDocs(collection(db, "movie"))
//   .then((response) => response.docs)
//   .then((data) => data.map((item) => console.log(item.id,"=>",item.data())));

export { auth, db };
