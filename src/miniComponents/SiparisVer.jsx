import React from "react";

export default function SiparisVer({ onSubmit, toplam, secilenler }) {
  return (
    <div
      style={{ border: "1px solid black", marginBottom: "120px" }}
      data-cy="siparis-ver-container"
    >
      <div>
        <h5
          style={{ paddingLeft: "30px", paddingTop: "30px" }}
          data-cy="siparis-baslik"
        >
          Sipariş Toplamı
        </h5>

        <p style={{ paddingLeft: "30px", paddingTop: "10px" }}>
          <span style={{ paddingRight: "100px" }}>Seçimler</span>{" "}
          <span data-cy="ozet-secilenler">{secilenler}</span>
        </p>

        <p style={{ paddingLeft: "30px" }}>
          <span style={{ color: "red", paddingRight: "107px" }}>Toplam</span>{" "}
          <span data-cy="toplam-fiyat">{toplam}₺</span>
        </p>
      </div>

      <button
        id="siparis-ver-button"
        onClick={onSubmit}
        data-cy="submit-button"
      >
        SİPARİŞ VER
      </button>
    </div>
  );
}
