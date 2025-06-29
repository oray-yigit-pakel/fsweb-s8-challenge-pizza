import React from "react";
import { NavLink } from "react-router-dom";
import "../miniCssComponents/statikButtons.css";
export default function StatikButtons() {
  const navItems = [
    "Ramen",
    "Pizza",
    "Burger",
    "French fries",
    "Fast food",
    "Soft Drinks",
  ];

  return (
    <div className="statik-button-group-container">
      {navItems.map((text, index) => (
        <button key={index} className="statik-button-item">
          <img
            src={`images/iteration-2-images/icons/${index + 1}.svg`}
            alt={text}
            className="statik-button-icon"
          />
          <span className="statik-button-text">{text}</span>
        </button>
      ))}
    </div>
  );
}
