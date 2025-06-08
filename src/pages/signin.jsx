import React, { useState } from "react";
import { useFirebase } from "../context/firebase";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();

  const handleEmailSignin = () => {
    firebase.signinUser(email, password);
  };

  const handleGoogleSignin = () => {
    firebase.signupWithGoogle(); // uses redirect
  };

  return (
    <div>
      <h2>Sign in</h2>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter your email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter your password"
      />
      <button onClick={handleEmailSignin}>Sign in with Email</button>
      <br />
      <button onClick={handleGoogleSignin}>Sign in with Google</button>
    </div>
  );
};

export default Signin;
