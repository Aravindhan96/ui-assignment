// src/components/Header.js
import React from "react";
import "./header.scss"; // Optional: If you want to style the header

const Header = () => {
  return (
    <header className="header">
      <div>
        <img
          src="../../assets/images/logo.png"
          className="header__logo"
          alt="logo"
        />
      </div>
      <div>
        <div>
          <span className="header__title">Hi, John Doe</span>
          <span className="header__subtitle">Welcome</span>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
