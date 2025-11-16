import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pickup.css';

function Pickup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    category: "",
    itemDescription: "",
    quantity: 1,
    preferredDate: "",
    preferredTime: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here, send `form` data to your backend API!
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

      <div className="pickup-section">
        <h2>Request an E-Waste Pickup</h2>
        <form className="pickup-form" onSubmit={handleSubmit}>
          <div className="pickup-row">
            <label>Name<span>*</span>
              <input type="text" name="name" required value={form.name} onChange={handleChange} />
            </label>
            <label>Email<span>*</span>
              <input type="email" name="email" required value={form.email} onChange={handleChange} />
            </label>
          </div>
          <div className="pickup-row">
            <label>Phone Number<span>*</span>
              <input type="tel" name="phone" required value={form.phone} onChange={handleChange} />
            </label>
            <label>Pincode<span>*</span>
              <input type="text" name="pincode" required value={form.pincode} onChange={handleChange} />
            </label>
          </div>
          <label>Full Pickup Address<span>*</span>
            <input type="text" name="address" required value={form.address} onChange={handleChange} />
          </label>
          <div className="pickup-row">
            <label>Category<span>*</span>
              <select name="category" required value={form.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option>Large IT & Telecom Equipment</option>
                <option>Small IT & Consumer Devices</option>
                <option>Display Equipment</option>
                <option>Cables & Connectors</option>
                <option>Household Appliances</option>
                <option>Batteries & Power Units</option>
                <option>Other</option>
              </select>
            </label>
            <label>Quantity
              <input type="number" name="quantity" min="1" value={form.quantity} onChange={handleChange} />
            </label>
          </div>
          <label>Item Description (Make/Model/Type)
            <textarea name="itemDescription" rows={3} value={form.itemDescription} onChange={handleChange}></textarea>
          </label>
          <div className="pickup-row">
            <label>Preferred Pickup Date<span>*</span>
              <input type="date" name="preferredDate" required value={form.preferredDate} onChange={handleChange} />
            </label>
            <label>Preferred Time
              <select name="preferredTime" value={form.preferredTime} onChange={handleChange}>
                <option value="">Select Time</option>
                <option>9am - 11am</option>
                <option>11am - 1pm</option>
                <option>2pm - 4pm</option>
                <option>4pm - 6pm</option>
              </select>
            </label>
          </div>
          <button type="submit" className="pickup-btn">Request Pickup</button>
        </form>

        {submitted && (
          <div className="pickup-confirm">
            <b>Thank you!</b> Your pickup request has been submitted.<br/>
            We will contact you soon at {form.email || "your email"}.
          </div>
        )}
      </div>
    </>
  );
}

export default Pickup;
