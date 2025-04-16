import logo from './logo.svg';
import React, { useState } from "react";
// import Login from './Login';
// import useMqtt from './useMqtt';
// import { sendPlugCommand } from './MqttClient';
// import { setTempCallback } from './MqttClient';
import "./App.css";

function App() {
  // State for each smart plug
  const [kitchenPlug, setKitchenPlug] = useState(false);
  const [bedroomPlug, setBedroomPlug] = useState(false);
  const [dungeonPlug, setDungeonPlug] = useState(false);

  // State for thermostat
  const [dungeonTemp, setDungeonTemp] = useState(20);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">Welcome to your Piethon Smart Home</nav>

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
          <p style={{ fontSize: '2rem'}}>
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