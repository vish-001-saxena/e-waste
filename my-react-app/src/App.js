import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main/Basics
import Home from './Home';
import About from './About';
import Features from './Features';
import Contact from './Contact';

// Feature Pages
import Pickup from './Pickup';
import Register from './Register';
import Tracking from './Tracking';
import Category from './Category';
import Blog from './Blog';
import MobileApp from './MobileApp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main/Basics */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />

        {/* Platform Features */}
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/mobile-app" element={<MobileApp />} />
      </Routes>
    </Router>
  );
}

export default App;
