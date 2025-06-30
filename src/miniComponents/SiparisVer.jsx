import React from "react";

export default function SiparisVer({ onSubmit, toplam, secilenler }) {
  return (
    <div style={{ border: "1px solid black", marginBottom: "120px" }}>
      <div>
        <h5 style={{ paddingLeft: "30px", paddingTop: "30px" }}>
          Sipariş Toplamı
        </h5>
        <p style={{ paddingLeft: "30px", paddingTop: "10px" }}>
          <span style={{ paddingRight: "100px" }}>Seçimler</span>{" "}
          <span>{secilenler}</span>
        </p>
        <p style={{ paddingLeft: "30px" }}>
          <span style={{ color: "red", paddingRight: "107px" }}>Toplam</span>{" "}
          <span>{toplam}₺</span>
        </p>
      </div>
      <button id="siparis-ver-button" onClick={onSubmit}>
        SİPARİŞ VER
      </button>
    </div>
  );
}
