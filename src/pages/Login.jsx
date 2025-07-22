import React from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom'; 

const Login = () => {
  return (
    <div className="login-container">
      <h2>Log-in to Project Triangle</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      <div className="login-footer">
        Don't have an account? <Link to="/register">Register to get started.</Link> 
      </div>
    </div>
  );
};

export default Login;
