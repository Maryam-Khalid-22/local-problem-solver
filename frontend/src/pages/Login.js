import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login process (will be connected to backend)
    setTimeout(() => {
      console.log('Login attempt with:', { email, password });
      alert('Login functionality will be connected to backend soon!');
      setLoading(false);
      
      // For demo purposes, redirect to home after "successful" login
      navigate('/');
    }, 1500);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    alert('Google authentication will be implemented with backend integration');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
    alert('Facebook authentication will be implemented with backend integration');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>
        
        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              placeholder="Enter your email"
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              placeholder="Enter your password"
              disabled={loading}
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#forgot" className="forgot-password">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className={`auth-btn ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register" className="auth-link">Sign up here</Link></p>
        </div>

        <div className="social-auth">
          <div className="social-divider">
            <span>Or continue with</span>
          </div>
          <div className="social-buttons">
            <button 
              type="button" 
              className="social-btn google"
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              Google
            </button>
            <button 
              type="button" 
              className="social-btn facebook"
              onClick={handleFacebookLogin}
              disabled={loading}
            >
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;