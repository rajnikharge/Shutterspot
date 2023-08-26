import React from 'react';
import './PasswordResetPage.css'; // Import your CSS for this page

function PasswordResetPage() {
  return (
    <div className="password-reset-container">
      <div className="password-reset-form">
        <h2>Password Reset</h2>
        <p>Enter your email address to reset your password:</p>
        <input type="email" placeholder="Your email" />
        <button>Send Reset Link</button>
      </div>
    </div>
  );
}

export default PasswordResetPage;
