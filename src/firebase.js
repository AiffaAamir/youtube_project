import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9Z1uWpbb9QduhTQl5UOF4LDM_8mkASlk",
  authDomain: "project-73605.firebaseapp.com",
  projectId: "project-73605",
  storageBucket: "project-73605.appspot.com",
  messagingSenderId: "793357093860",
  appId: "1:793357093860:web:a7bd1d22b59b14ce0fd5f1",
  databaseURL: "https://project-73605-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export { app };
