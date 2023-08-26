import React, { useState } from 'react';
import './LoginPage.css'; // You can create this CSS file for styling
import { Link } from 'react-router-dom'; // Import Link
import loginImage from './Login.png';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with', username, password);
  };

  return (
    <div className="login-container">
       <div className="background-image">
      <div className="login-form">
        <h1>Shutter Spot</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
        <p>Forgot password? <Link to="/reset-password">Reset here</Link></p>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
      </div>
    </div>
  );
}

export default LoginPage;
