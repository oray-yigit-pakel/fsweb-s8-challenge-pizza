import React from "react";
import { NavLink } from "react-router-dom";

function NavigationMenu() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "25px",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        width: "1920",
        justifyContent: "center",
      }}
    >
      <NavLink
        to="/anasayfa"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
          color: "black",
        }}
      >
        <img
          src="images/iteration-2-images/icons/1.svg"
          alt="YENİ! Kore"
          style={{ width: 40, height: 40 }}
        />
        <span>YENİ! Kore</span>
      </NavLink>

      <NavLink
        to="/anasayfa"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
          color: "black",
        }}
      >
        <img
          src="images/iteration-2-images/icons/2.svg"
          alt="Pizza"
          style={{ width: 40, height: 40 }}
        />
        <span>Pizza</span>
      </NavLink>

      <NavLink
        to="/anasayfa"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
          color: "black",
        }}
      >
        <img
          src="images/iteration-2-images/icons/3.svg"
          alt="Burger"
          style={{ width: 40, height: 40 }}
        />
        <span>Burger</span>
      </NavLink>

      <NavLink
        to="/anasayfa"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
          color: "black",
        }}
      >
        <img
          src="images/iteration-2-images/icons/4.svg"
          alt="Kızartmalar"
          style={{ width: 40, height: 40 }}
        />
        <span>Kızartmalar</span>
      </NavLink>

      <NavLink
        to="/anasayfa"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
          color: "black",
        }}
      >
        <img
          src="images/iteration-2-images/icons/5.svg"
          alt="Fast food"
          style={{ width: 40, height: 40 }}
        />
        <span>Fast food</span>
      </NavLink>

      <NavLink
        to="/anasayfa"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
          color: "black",
        }}
      >
        <img
          src="images/iteration-2-images/icons/6.svg"
          alt="Gazlı içecek"
          style={{ width: 40, height: 40 }}
        />
        <span>Gazlı içecek</span>
      </NavLink>
    </nav>
  );
}

export default NavigationMenu;
