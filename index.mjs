// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, where, query, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env['API_KEY'] || 'API_KEY_VACIA',
  authDomain: process.env['AUTH_DOMAIN'] || 'AUTH_DOMAIN_VACIO',
  projectId: process.env['PROJECT_ID'] || 'PROJECT_ID_VACIO'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const myCollection = collection(db, "movies")
const q = query(myCollection, where("director", "==", "Tim Burton"));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.id);
  console.table(doc.data());
});
