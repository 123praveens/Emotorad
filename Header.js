import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Dashboard</h1>
      <input type="text" placeholder="Search..." />
      <div className="profile">
        <img src="path-to-profile-image" alt="Profile" />
      </div>
    </header>
  );
}

export default Header;
