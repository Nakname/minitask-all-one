import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="inner-wrapper">
        <div className="logo">ЛОГОТИП</div>
        <div className="user-actions">
          <div className="notification-bell"></div>
          <div className="user-avatar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
