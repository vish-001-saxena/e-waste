import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tracking.css';

function Tracking() {
  const [trackingId, setTrackingId] = useState('');
  const [destination, setDestination] = useState('');
  const [showMap, setShowMap] = useState(false);

  // Demo: pretend to fetch destination info based on tracking ID
  function handleTrack(e) {
    e.preventDefault();
    if (trackingId) {
      // Replace with API call
      setDestination('GreenLife Recycling Center, Mumbai');
      setShowMap(true);
    }
  }

  return (
    <>
      {/* Navbar */}
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

      <div className="tracking-section">
        <h2>Track Your E-Waste</h2>
        <form className="tracking-form" onSubmit={handleTrack}>
          <label htmlFor="trackingId" className="tracking-label">
            Enter Tracking ID
          </label>
          <input
            id="trackingId"
            type="text"
            value={trackingId}
            onChange={e => setTrackingId(e.target.value)}
            placeholder="e.g. EW12345"
            className="tracking-input"
            required
          />
          <button type="submit" className="tracking-btn">
            Track
          </button>
        </form>
        {destination && (
          <div className="tracking-result">
            <p>
              <strong>Destination:</strong> {destination}
            </p>
          </div>
        )}
        {showMap && (
          <div className="tracking-map-container">
            <h3 style={{ color: '#249e65', marginBottom: '1em' }}>Current Location / Route</h3>
            {/* You can replace this iframe src with a dynamic map API if needed */}
            <iframe
              title="Tracking Map"
              src="https://maps.google.com/maps?q=GreenLife%20Recycling%20Center,%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              style={{ border:0, borderRadius:"12px", width: "100%", height: "320px" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Tracking;
