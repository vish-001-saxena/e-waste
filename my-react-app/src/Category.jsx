import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './category.css';

const ewasteCategories = [
  {
    icon: "💻",
    name: "Large IT & Telecom Equipment",
    desc: "Desktops, laptops, servers, printers, routers, etc."
  },
  {
    icon: "📱",
    name: "Small IT & Consumer Devices",
    desc: "Mobile phones, cameras, headphones, calculators, etc."
  },
  {
    icon: "📺",
    name: "Display Equipment",
    desc: "TVs, monitors, projectors, LED panels, etc."
  },
  {
    icon: "🔌",
    name: "Cables & Connectors",
    desc: "Chargers, extension boards, data cables, adapters."
  },
  {
    icon: "🧯",
    name: "Household Appliances",
    desc: "Refrigerators, washing machines, microwaves, fans."
  },
  {
    icon: "🔋",
    name: "Batteries & Power Units",
    desc: "Power banks, inverters, UPS, lithium-ion cells, etc."
  }
];

function Category() {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setSelected(e.target.value);
    setSubmitted(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (selected) setSubmitted(true);
  }

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

      <div className="category-section-vertical">
        <h2 className="center">Select E-Waste Category</h2>
        <p className="prompt">Which type of e-waste are you trying to submit?</p>
        
        <div className="vertical-category-list">
          {ewasteCategories.map(cat => (
            <label className={`vertical-category-card${selected === cat.name ? " selected-vertical" : ""}`} key={cat.name}>
              <div className="vertical-card-icon">{cat.icon}</div>
              <input
                type="radio"
                value={cat.name}
                name="category"
                checked={selected === cat.name}
                onChange={handleChange}
                className="vertical-radio"
              />
              <div className="vertical-card-content">
                <h3 className="vertical-card-title">{cat.name}</h3>
                <p className="vertical-card-desc">{cat.desc}</p>
              </div>
            </label>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="vertical-category-form">
          <button type="submit" className="vertical-btn" disabled={!selected}>
            Submit My Category
          </button>
          {submitted && selected && (
            <div className="vertical-confirm">
              Thank you! You selected: <b>{selected}</b>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Category;
