import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  useEffect(() => {
    console.log('E-Waste Link Homepage Loaded');
  }, []);

  return (
    <>
      {/* Simplified Navbar */}
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

      {/* Hero Section */}
      <section className="hero">
        <h2>Revolutionizing E-Waste Management</h2>
        <p>Track. Recycle. Empower. From households to recyclers — a digital link for responsible disposal.</p>
        <a href="#features" className="btn">Explore Features</a>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h3>Platform Highlights</h3>
        <div className="features-grid">
          <div className="feature-item">
            <Link to="/mobile-app"><h4>Mobile App</h4></Link>
            <p>Schedule pickups, scan devices, track history — all from your phone.</p>
          </div>
          <div className="feature-item">
            <Link to="/register"><h4>User Registration</h4></Link>
            <p>Start registering and take action today.</p>
          </div>
          <div className="feature-item">
            <Link to="/pickup"><h4>Schedule Pickups</h4></Link>
            <p>Choose your preferred time slots to reduce any hassles.</p>
          </div>
          <div className="feature-item">
            <Link to="/categories"><h4>E-waste Categories</h4></Link>
            <p>Explore various categories to help us process efficiently.</p>
          </div>
          <div className="feature-item">
            <Link to="/tracking"><h4>E-waste Tracking</h4></Link>
            <p>Track your e-waste until it reaches certified recycling centers.</p>
          </div>
          <div className="feature-item">
            <Link to="/blog"><h4>Awareness & Blogs</h4></Link>
            <p>Your small steps help us drive a big change.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <h3>How E-Waste Link Works</h3>
        <ol>
          <li>User opens the mobile app and schedules a pickup.</li>
          <li>Device is scanned, tagged with a QR/IoT identifier.</li>
          <li>AI engine analyzes condition and provides instant value quote.</li>
          <li>Pickup agent collects the device and uploads its journey via GPS.</li>
          <li>Blockchain logs every step till certified recycling is complete.</li>
        </ol>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h3>Connect With Us</h3>
        <p style={{ textAlign: "center", marginBottom: 20 }}>
          Want to partner or get involved? We’d love to hear from you.
        </p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 E-Waste Link | Designed for Smart, Safe Disposal</p>
      </footer>
    </>
  );
}

export default Home;
