import React from "react";
export default function EkMalzemeler({ selectedItems, onChange }) {
  const ekstralar = [
    "Pepperoni", "sortUserPlugins", "Kanada Jambonu", "Tavuk Izgara",
    "Soğan", "Domates", "Mısır", "Jalapeno", "Sarımsak",
    "Biber", "Sucuk", "Ananas", "Kabak"
  ];

  return (
    <div>
      {ekstralar.map((ekstra, index) => (
        <label key={index} htmlFor={`ekstra-${index}`} className="checkbox-label">
          <input
            id={`ekstra-${index}`}
            type="checkbox"
            name="ekstra-malzemeler"
            value={ekstra}
            checked={selectedItems.includes(ekstra)}
            onChange={onChange}
          />
          {ekstra}
        </label>
      ))}
    </div>
  );
}