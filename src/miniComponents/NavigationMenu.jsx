import React from "react";
import { NavLink } from "react-router-dom";
import "../miniCssComponents/NavigationMenu.css";

function NavigationMenu() {
  const navItems = [
    "YENİ! Kore",
    "Pizza",
    "Burger",
    "Kızartmalar",
    "Fast food",
    "Gazlı içecek",
  ];

  return (
    <nav className="ana-nav-container">
      {navItems.map((text, index) => (
        <NavLink key={index} to="/anasayfa" className="ana-nav-link">
          <img
            src={`images/iteration-2-images/icons/${index + 1}.svg`}
            alt={text}
            className="ana-nav-icon"
          />
          <span className="ana-nav-text">{text}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default NavigationMenu;
