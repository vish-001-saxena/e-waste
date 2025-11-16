import React from 'react';
import { Link } from 'react-router-dom';
import './MobileApp.css';

// Replace these URLs with your actual app's links and image assets:
const appLogoUrl = "https://st3.depositphotos.com/16499398/19552/v/600/depositphotos_195526222-stock-illustration-e-waste-logo-isolated-on.jpg"// Place your app logo in public/ or src/ and update the path
const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://play.google.com/store/apps/details?id=your.app.id";
const playStoreUrl = "https://play.google.com/store/apps/details?id=your.app.id";

function MobileApp() {
  return (
    <>
      <header className="navbar">
        <div className="container navbar-content">
          <h1 className="logo">E-Waste Link</h1>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/features">Features</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <div className="mobileapp-section">
        <img src={appLogoUrl} alt="App Logo" className="mobileapp-logo" />
        <h2>Get our Mobile App!</h2>
        <p>
          Download the E-Waste Link app for Android.
          Scan the QR code below or click the Play Store link to install!
        </p>

        <div className="mobileapp-actions">
          <img
            src={qrCodeUrl}
            alt="QR code to download the app"
            className="mobileapp-qr"
          />
          <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="play-badge">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{height: "54px"}} />
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileApp;
