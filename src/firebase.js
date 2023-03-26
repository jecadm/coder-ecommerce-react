import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl0OkdQtQWJDWBkR5Xo-BsVh--3VV4hWM",
  authDomain: "mi-proyecto-f861f.firebaseapp.com",
  projectId: "mi-proyecto-f861f",
  storageBucket: "mi-proyecto-f861f.appspot.com",
  messagingSenderId: "253410502400",
  appId: "1:253410502400:web:a7dbe5c41a10ae4dca35e5",
  measurementId: "G-MY5GC0DNBT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);