import React, { useState } from "react";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const goToOtp = () => {
    if (!contact) {
      alert("Please enter your Email or Phone.");
      return;
    }
    alert("OTP sent to " + contact);
    setStep(2);
  };

  const goToDetails = () => {
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }
    alert("OTP Verified!");
    setStep(3);
  };

  const handleSignUp = () => {
    if (!userDetails.name || !userDetails.email || !userDetails.password) {
      alert("Please fill all details.");
      return;
    }
    alert("Sign Up Successful! 🎉");
  };

  const goBack = (toStep) => {
    setStep(toStep);
  };

  return (
    <div className="container">
      <h2>Sign In / Sign Up</h2>

      {/* Step 1: Enter Email or Phone */}
      {step === 1 && (
        <div className="step">
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Email or Phone"
          />
          <button onClick={goToOtp}>Get OTP</button>
        </div>
      )}

      {/* Step 2: OTP Verification */}
      {step === 2 && (
        <div className="step">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={goToDetails}>Verify OTP</button>
          <button className="back" onClick={() => goBack(1)}>
            Back
          </button>
        </div>
      )}

      {/* Step 3: Enter User Details */}
      {step === 3 && (
        <div className="step">
          <input
            type="text"
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
            placeholder="Enter Name"
          />
          <input
            type="email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            placeholder="Enter Email"
          />
          <input
            type="password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            placeholder="Enter Password"
          />
          <button onClick={handleSignUp}>Sign Up</button>
          <button className="back" onClick={() => goBack(2)}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}
