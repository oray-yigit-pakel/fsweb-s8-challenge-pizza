import React from "react";
export default function PizzaBoyutu({ value, onChange }) {
  const boyutlar = ["Küçük", "Orta", "Büyük"];

  return (
    <div>
      {boyutlar.map((boyut, index) => (
        <label key={index} htmlFor={`boyut-${index}`}>
          <input
            type="radio"
            id={`boyut-${index}`}
            name="pizza-boyutu"
            value={boyut}
            checked={value === boyut}
            onChange={onChange}
          />
          {boyut}
        </label>
      ))}
    </div>
  );
}
