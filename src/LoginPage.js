import React, { useState } from "react";
import './LoginPage.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onLogin(userCredential.user); // Call onLogin with the user info if needed
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert("No user found with that email.");
      } else if (error.code === 'auth/wrong-password') {
        alert("Incorrect password.");
      } else {
        alert("Login failed: " + error.message);
      }
    }
  };

  return (
    <div className="login-container">
        <h2>Welcome to Piethon Smart Homes</h2>
        <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

