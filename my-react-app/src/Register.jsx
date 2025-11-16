import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    pincode: "",
    userType: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors({});
  }

  function validate() {
    const errs = {};
    if(!form.name) errs.name = "Name is required.";
    if(!form.email) errs.email = "Email is required.";
    if(!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email address.";
    if(!form.phone) errs.phone = "Phone number is required.";
    if(form.phone && !/^[0-9]{10}$/.test(form.phone)) errs.phone = "Phone must be 10 digits.";
    if(!form.password) errs.password = "Password is required.";
    if(form.password.length < 6) errs.password = "Password must be at least 6 characters.";
    if(form.password !== form.confirmPassword) errs.confirmPassword = "Passwords do not match.";
    if(!form.address) errs.address = "Address is required.";
    if(!form.pincode) errs.pincode = "Pincode is required.";
    if(form.pincode && !/^[0-9]{6}$/.test(form.pincode)) errs.pincode = "Pincode must be 6 digits.";
    if(!form.userType) errs.userType = "Select user type.";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    // send `form` data to backend here!
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

      <div className="register-section">
        <h2>User Registration</h2>
        <form className="register-form" onSubmit={handleSubmit} autoComplete="off">
          <label>
            Name<span>*</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} />
            {errors.name && <div className="reg-error">{errors.name}</div>}
          </label>
          <label>
            Email<span>*</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
            {errors.email && <div className="reg-error">{errors.email}</div>}
          </label>
          <label>
            Phone Number<span>*</span>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <div className="reg-error">{errors.phone}</div>}
          </label>
          <div className="register-row">
            <label>
              Password<span>*</span>
              <input type="password" name="password" value={form.password} onChange={handleChange} />
              {errors.password && <div className="reg-error">{errors.password}</div>}
            </label>
            <label>
              Confirm Password<span>*</span>
              <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
              {errors.confirmPassword && <div className="reg-error">{errors.confirmPassword}</div>}
            </label>
          </div>
          <label>
            Full Address<span>*</span>
            <input type="text" name="address" value={form.address} onChange={handleChange} />
            {errors.address && <div className="reg-error">{errors.address}</div>}
          </label>
          <div className="register-row">
            <label>
              Pincode<span>*</span>
              <input type="text" name="pincode" value={form.pincode} onChange={handleChange} />
              {errors.pincode && <div className="reg-error">{errors.pincode}</div>}
            </label>
            <label>
              User Type<span>*</span>
              <select name="userType" value={form.userType} onChange={handleChange}>
                <option value="">Select</option>
                <option>Household</option>
                <option>Business</option>
                <option>Recycler</option>
                <option>Other</option>
              </select>
              {errors.userType && <div className="reg-error">{errors.userType}</div>}
            </label>
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
        {submitted &&
          <div className="register-confirm">
            <b>Registration Successful!</b><br />
            Welcome, {form.name || "User"}.<br />
            Please check your email for account activation.
          </div>
        }
      </div>
    </>
  );
}

export default Register;
