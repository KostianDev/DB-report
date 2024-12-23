import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPsSEeWBhZJCe76ZmPgiMjbBLoFpbvszY",
  authDomain: "db-report-ed0bf.firebaseapp.com",
  projectId: "db-report-ed0bf",
  storageBucket: "db-report-ed0bf.firebasestorage.app",
  messagingSenderId: "21993050274",
  appId: "1:21993050274:web:fe794d6a5bf40ad0ee87fb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
const email = "user@example.com";
const password = "password123";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;

    console.log(user);

    setDoc(doc(db, "users", user.uid), {
      email: user.email,
      created: new Date()
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
);