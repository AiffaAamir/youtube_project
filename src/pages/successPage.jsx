import React from "react";
import { useFirebase } from "../context/firebase";

const SuccessPage = () => {
  const firebase = useFirebase();

  const handleLogout = () => {
    firebase.logout();
    window.location.href = "/"; // or navigate programmatically
  };

  return (
    <div>
      <h1>You are signed in successfully!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SuccessPage;
