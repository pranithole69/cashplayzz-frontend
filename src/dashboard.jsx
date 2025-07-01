import React, { useState } from "react";
import './dashboard.css';
import { FaWallet, FaBars, FaTimes } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleWallet = () => setWalletOpen(!walletOpen);

  return (
    <div className="dashboard-container">
      {/* Hamburger + Sidebar */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>
      {menuOpen && (
        <div className="sidebar">
          <ul>
            <li>Logout</li>
            <li>Settings</li>
          </ul>
        </div>
      )}

      {/* Top Balance Box */}
      <div className="balance-box">
        <GiTwoCoins className="coin-icon" />
        <span className="balance-text">₹12,500.00</span>
        <FaWallet className="wallet-icon" onClick={toggleWallet} />
      </div>

      {/* Wallet Dropdown */}
      {walletOpen && (
        <div className="wallet-box">
          <button className="wallet-btn">Deposit</button>
          <button className="wallet-btn">Withdraw</button>
        </div>
      )}

      {/* Game Zone */}
      <div className="game-zone">
        <h2>🎮 Game Zone</h2>
        <p>Here you can play cool games!</p>
      </div>

      {/* User Info */}
      <div className="user-info">👤 Logged in as: <span>Player123</span></div>
    </div>
  );
}

export default Dashboard;
