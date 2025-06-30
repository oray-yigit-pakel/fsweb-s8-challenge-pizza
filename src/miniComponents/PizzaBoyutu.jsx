import React from "react";
import "../miniCssComponents/pizzaBoyutu.css";

export default function PizzaBoyutu({ value, onChange }) {
  const boyutlar = ["S", "M", "L"];

  return (
    <div className="radio-group">
      {boyutlar.map((boyut, index) => (
        <label
          key={index}
          className={`custom-radio ${value === boyut ? "selected" : ""}`}
        >
          <input
            type="radio"
            name="pizza-boyutu"
            value={boyut}
            checked={value === boyut}
            onChange={onChange}
          />
          <span className="radio-label">{boyut}</span>
        </label>
      ))}
    </div>
  );
}

//bu tarz durumlarda htmlFora gerek yok çümkü input zaten labelın içinde