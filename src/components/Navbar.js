import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__top-section">
        <div className="navbar__tuka-logo">
          <img src="../assets/logo.png" alt="logo"/>
        </div>
        <div className="navbar__text">
          Discover • Share • Connect
        </div>
        <ul className="navbar__linklist">
          <a href="#profile"><img src="../assets/profile-icon.png" className="navbar__link" alt="profile link"/></a>
          <a href="#hamburger"><img src="../assets/hamburger-icon.png" className="navbar__link" alt="hamburger menu"/></a>
        </ul>
      </div>
      <div className="navbar__middle-section">
      </div>
      <div className="navbar__bottom-section">
      </div>
    </nav>
  )
}

export default Navbar;