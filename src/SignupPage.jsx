import React, { useState } from 'react';
import './SignupPage.css';

function SignupPage() {
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpInput, setOtpInput] = useState('');

  const handleSendOtp = () => {
    // Simulate sending OTP
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // Simulate verifying OTP
    setOtpVerified(true);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an Account</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="tel" placeholder="Phone Number" />

        {!otpSent ? (
          <button onClick={handleSendOtp}>Send OTP</button>
        ) : (
          <div className="otp-container">
            <input
              type="text"
              className="otp-input"
              placeholder="Enter OTP"
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
            />
            <button className="verify-otp-button" onClick={handleVerifyOtp}>
              Verify OTP
            </button>
            {otpVerified && <p className="verified">OTP Verified</p>}
          </div>
        )}

        <button>Sign Up</button>
        <p>Already have an account? <a href="/">Log In</a></p>
      </div>
    </div>
  );
}

export default SignupPage;
