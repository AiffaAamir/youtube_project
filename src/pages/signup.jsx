import React, { useState } from "react"
import { useFirebase } from "../context/firebase"

const SignupPage = () => {
  const firebase = useFirebase()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="signup-page">
      <h1>Sign up Page</h1>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter your email"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter your password"
      />
      <button onClick={() =>{
        firebase.createUser(email, password);
        firebase.putData("users/" + "newUser", {email, password});
  }
        }>
        Sign Up
      </button>
    </div>
  )
}

export default SignupPage
