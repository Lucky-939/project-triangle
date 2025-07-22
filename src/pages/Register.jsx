import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register-container">
      <h2>Create Account</h2>
      <form className="register-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <div className="register-footer">
        Already have an account? <Link to="/login">Login here</Link>
      </div>
    </div>
  );
}

export default Register;