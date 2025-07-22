import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; 
import './Navbar.css';
import logo from '../assets/logo.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Project Triangle Logo" className="logo-img" />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
          <img src={logo} alt="Project Triangle Logo" className="logo-img" />
      </ul>

      <div className="auth-buttons">
        <Link to="/login">
          <button className="login-btn">
            <FiLogIn style={{ marginRight: '6px', fontSize: '18px' }} />
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
