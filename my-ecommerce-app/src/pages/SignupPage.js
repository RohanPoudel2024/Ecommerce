import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

function SignupPage() {
  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <div className="number-input">
            <select id="countryCode" name="countryCode">
              <option value="+977">+977 Nepal</option>
              {/* Add more country codes as needed */}
            </select>
            <input type="tel" id="number" name="number" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p className="login-link">
        Already a member? <Link to="/login">Login now</Link>
      </p>
    </div>
  );
}

export default SignupPage;