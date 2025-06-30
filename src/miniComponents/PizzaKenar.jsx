import React from "react";

export default function PizzaKenar({ value, onChange }) {
  const kenarTipleri = ["Kalın", "İnce", "Nefis Kenar"];

  return (
    <div>
      <label style={{ marginTop: "30px" }} htmlFor="kenartipleri">
        Hamur Seç <span style={{ color: "red" }}>*</span>
      </label>
      <select
        id="kenartipleri"
        name="kenar"
        value={value}
        onChange={onChange}
        data-cy="kenar-select"
      >
        <option value="">-Hamur Tipi Seçiniz</option>
        {kenarTipleri.map((tip, index) => (
          <option key={index} value={tip}>
            {tip}
          </option>
        ))}
      </select>
    </div>
  );
}