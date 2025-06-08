import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  signInWithPopup, // ✅ Add this!
  GoogleAuthProvider,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB9Z1uWpbb9QduhTQl5UOF4LDM_8mkASlk",
  authDomain: "project-73605.firebaseapp.com",
  projectId: "project-73605",
  storageBucket: "project-73605.appspot.com",
  messagingSenderId: "793357093860",
  appId: "1:793357093860:web:a7bd1d22b59b14ce0fd5f1",
  databaseURL: "https://project-73605-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseContext = createContext(null);
const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const useFirebase = () => useContext(firebaseContext);

export const FirebaseProvider = (props) => {
  const createUser = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signinUser = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signupWithGoogle = () => {
      return signInWithPopup(firebaseAuth, googleProvider)
        .then((result) => {
          console.log("Google sign-in success:", result.user);
        })
        .catch((error) => {
          console.error("Google sign-in error:", error);
        });
    };


  const logout = () => signOut(firebaseAuth);

  const listenToAuthChanges = (callback) => {
    return onAuthStateChanged(firebaseAuth, callback);
  };

  return (
    <firebaseContext.Provider
      value={{
        createUser,
        signinUser,
        signupWithGoogle,
        logout,
        listenToAuthChanges,
        //currentUser: firebaseAuth.currentUser,
      }}
    >
      {props.children}
    </firebaseContext.Provider>
  );
};
