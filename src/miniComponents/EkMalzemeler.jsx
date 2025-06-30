import React from "react";

export default function EkMalzemeler({ secilenler, onChange }) {
  const ekstralar = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Jalapeno",
    "Sarımsak",
    "Biber",
    "Sucuk",
    "Ananas",
    "Kabak",
  ];

  return (
    <div className="ekmalzeme-grid">
      {ekstralar.map((ekstra, index) => (
        <label
          key={index}
          htmlFor={`ekstra-${index}`}
          className="checkbox-label"
        >
          <input
            id={`ekstra-${index}`}
            type="checkbox"
            name="ekstraMalzemeler"
            value={ekstra}
            checked={secilenler.includes(ekstra)}
            onChange={onChange}
          />
          <span className="custom-checkbox"></span>
          {ekstra}
        </label>
      ))}
    </div>
  );
}