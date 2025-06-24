import { useState, useEffect } from "react";
import background from "./assets/bg.png";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  // Time and UI state
  const [currentTime, setCurrentTime] = useState("");
  const [showAgreement, setShowAgreement] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState(false);

  // Fake stats
  const [activeUsers, setActiveUsers] = useState(Math.floor(Math.random() * 1000) + 200);
  const [wageredAmount, setWageredAmount] = useState(0);

  // Form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // Show current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fake stats updater
  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 11) + 5;
      const increase = Math.random() > 0.5;
      setActiveUsers((prev) => {
        let updated = increase ? prev + change : prev - change;
        if (updated < 50) updated = 50;
        if (updated > 5000) updated = 5000;
        return updated;
      });

      const newAmount = Math.floor(Math.random() * (350000 - 23000 + 1)) + 23000;
      setWageredAmount(newAmount);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleAgreement = () => setShowAgreement(!showAgreement);

  // ✅ Signup
  const handleSignup = async () => {
    if (!agreeChecked) return alert("Please accept the user agreement.");
    if (!signupEmail || !signupUsername || !signupPassword) return alert("All fields required.");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        email: signupEmail,
        username: signupUsername,
        password: signupPassword,
      });
      alert(res.data.message || "Signup successful!");
      setShowSignup(false);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed.");
    }
  };

  // ✅ Login (corrected: email used)
  const handleLogin = async () => {
    if (!loginEmail || !loginPassword) return alert("Enter both fields.");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: loginEmail,
        password: loginPassword,
      });
      alert(res.data.message || "Login successful!");
      setShowLogin(false);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <div className="center-box">
        <p className="time-indicator">🌐 World → 🇮🇳 India → 🕓 {currentTime}</p>
        <h1 className="welcome">
          Welcome to <span className="highlight">CashPlayzz</span>
        </h1>

        <div className="buttons">
          <button onClick={() => setShowLogin(true)}>Login</button>
          <button onClick={() => setShowSignup(true)}>Signup</button>
          <button onClick={toggleAgreement}>View User Agreement</button>
        </div>

        <div className="info-section">
          <p>🔥 {activeUsers.toLocaleString()} players active</p>
          <p>💸 ₹{wageredAmount.toLocaleString()} wagered this second</p>
        </div>

        <div style={{ fontSize: "12px", color: "#aaa", marginTop: "10px", fontStyle: "italic" }}>
          Powered by CashPlayzz — where gaming meets strategy.
          <br />
          Play smart. Stay in control.
        </div>

        <p className="footer-msg">
          Don’t worry, you’re on a safe platform, <span>BUDDYY!</span>
        </p>
      </div>

      {/* User Agreement Popup */}
      {showAgreement && (
        <div className="agreement-popup">
          <h2>User Agreement</h2>
          <p>⚠️ This is a real gambling platform. You are playing at your own risk.</p>
          <p>Games are set at 50–50 win/loss odds.</p>
          <p>Only 18+ users allowed. Don’t bet more than you can afford to lose.</p>
          <p>We are not responsible for losses. CashPlayzz is secure & transparent.</p>
          <button onClick={toggleAgreement}>I Agree & Close</button>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Login to CashPlayzz</h2>
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button className="modal-btn" onClick={handleLogin}>Login</button>
            <button className="modal-close" onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal-overlay" onClick={() => setShowSignup(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Create an Account</h2>
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <label style={{ display: "block", marginTop: "10px", color: "#ccc" }}>
              <input
                type="checkbox"
                checked={agreeChecked}
                onChange={() => setAgreeChecked(!agreeChecked)}
              />{" "}
              I accept the{" "}
              <span
                onClick={toggleAgreement}
                style={{ color: "#00ffee", cursor: "pointer", textDecoration: "underline" }}
              >
                User Agreement
              </span>
            </label>
            <button className="modal-btn" onClick={handleSignup} disabled={!agreeChecked}>Signup</button>
            <button className="modal-close" onClick={() => setShowSignup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
