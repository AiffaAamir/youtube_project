import React, { useEffect, useState } from "react";
import { useFirebase } from "./context/firebase";
import Signin from "./pages/signin";
import SuccessPage from "./pages/successPage";
import SignupPage from "./pages/signup";

function App() {
  const firebase = useFirebase();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ prevent UI flicker

  useEffect(() => {
    const unsubscribe = firebase.listenToAuthChanges((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [firebase]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>Firebase Auth Project</h1>
      {user ? (
        <SuccessPage />
      ) : (
        <>
          <SignupPage />
          <Signin />
        </>
      )}
    </>
  );
}

export default App;
