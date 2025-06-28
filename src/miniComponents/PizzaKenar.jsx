import React from "react";
export default function PizzaKenar({ onChange }) {
  const kenarTipleri = ["Kalın", "İnce", "Nefis Kenar"];

  return (
    <div>
      <label htmlFor="kenartipleri">
        Hamur Seç <span>*</span>
      </label>
      <select
        id="kenartipleri"
        name="kenarTipi"
        onChange={onChange}
      >
        <option value="">Hamur Tipi Seçiniz</option>
        {kenarTipleri.map((tip, index) => (
          <option key={index} value={tip}>
            {tip}
          </option>
        ))}
      </select>
    </div>
  );
}