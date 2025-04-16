import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import LoginPage from './LoginPage';
import { auth } from "./firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";


function App() {
  // State for each smart plug
  const [loggedIn, setLoggedIn] = useState(false);
  const [kitchenPlug, setKitchenPlug] = useState(false);
  const [bedroomPlug, setBedroomPlug] = useState(false);
  const [dungeonPlug, setDungeonPlug] = useState(false);
  const [dungeonTemp, setDungeonTemp] = useState(18);

  // Firebase login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
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
  

  // Logout handler
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">Welcome to your Piethon Smart Home</nav>

      {loggedIn && (
      <button className="logout-button" onClick={() => setLoggedIn(false)}>
       Logout
      </button>
      )}

      {/* Dashboard Grid */}
      <div className="dashboard">
        {/* Kitchen Plug */}
        <div className="device-card">
          <h3>Kitchen Plug</h3>
          {/* <button onClick={() => sendPlugCommand('kitchen', 'on')}>Turn On</button>
          <button onClick={() => sendPlugCommand('kitchen', 'off')}>Turn Off</button> */}
          <button onClick={() => setKitchenPlug(!kitchenPlug)}>
            {kitchenPlug ? "Turn Off" : "Turn On"}
          </button>
        </div>

        {/* James' Bedroom Plug */}
        <div className="device-card">
          <h3>James' Bedroom Plug</h3>
          {/* <button onClick={() => sendPlugCommand('bedroom' , 'on')}>Turn On</button>
          <button onClick={() => sendPlugCommand('bedroom', 'off')}>Turn Off</button> */}
          <button onClick={() => setBedroomPlug(!bedroomPlug)}>
            {bedroomPlug ? "Turn Off" : "Turn On"}
          </button>
        </div>

        {/* Dungeon Plug */}
        <div className="device-card">
          <h3>Dungeon Plug</h3>
          {/* <button onClick={() => sendPlugCommand('dungeonPlug', 'on')}>Turn On</button>
          <button onClick={() => sendPlugCommand('dungeonPlug', 'off')}>Turn Off</button> */}
          <button onClick={() => setDungeonPlug(!dungeonPlug)}>
            {dungeonPlug ? "Turn Off" : "Turn On"}
          </button>
        </div>

        {/* Dungeon Heating */}
        <div className="device-card">
          <h3>Dungeon Heating</h3>
          <p style={{ fontSize: '50px', margin: 0}}>
            {dungeonTemp}°C
          </p>
        </div>

        {/* Add Device Demo Card */}
        <div className="device-card add-card">
          <span className="add-icon">+</span>
          <p>Add Device</p>
        </div>
      </div>
    </div>
  );
}

export default App;