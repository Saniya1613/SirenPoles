// src/components/Home.jsx
import React from "react";
import "./Home.css";


const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>SirenPoles</h1>
        <p>Your Safety, One Tap Away</p>
      </header>

      <div className="emergency-modes">
        <button className="emergency-button loud-siren">Loud Siren Mode</button>
        <button className="emergency-button silent-sos">Silent SOS Mode</button>
        <button className="emergency-button direct-call">Direct Police Call</button>
      </div>

      <div className="location-display">
        <p>Current Location:</p>
        <span>Loading...</span>
      </div>

      <div className="how-it-works">
        <h2>How It Works</h2>
        <p>Press any emergency mode button to trigger a quick alert. Our system sends your live location to the nearest help available, ensuring rapid response.</p>
      </div>

      <footer className="footer">
        <p>&copy; 2025 SirenPoles. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
