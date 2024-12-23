import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
  doc,
  query,
  where,
  orderBy
} from "firebase/firestore";

// Ініціалізація Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDPsSEeWBhZJCe76ZmPgiMjbBLoFpbvszY",
  authDomain: "db-report-ed0bf.firebaseapp.com",
  projectId: "db-report-ed0bf",
  storageBucket: "db-report-ed0bf.firebasestorage.app",
  messagingSenderId: "21993050274",
  appId: "1:21993050274:web:fe794d6a5bf40ad0ee87fb"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Отримання доступу до Firestore
const db = getFirestore(app);

// Додавання документа
const addData = async (doc) => {
  try {
    const docRef = await addDoc(collection(db, "users"), { ...doc });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Отримання даних
const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

// Отримання даних за параметрами
const getDataByParameters = async () => {
  const q = query(
    collection(db, "users"),
    where("born", ">", 1900),
    orderBy("born")
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

// Оновлення документа
const updateData = async (docId) => {
  const docRef = doc(db, "users", docId);
  await updateDoc(docRef, {
    born: 1816
  });
  console.log("Document updated");
};

// Видалення документа
const deleteData = async (docId) => {
  const docRef = doc(db, "users", docId);
  await deleteDoc(docRef);
  console.log("Document deleted");
};

const fetchData = async () => {
  const doc1 = {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  };
  const doc2 = {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  };
  const doc3 = {
    first: "John",
    last: "von Neumann",
    born: 1903
  };

  await deleteData("0CyrmSJ7sDknWLFNSgoW");
  await getData();
};

fetchData();