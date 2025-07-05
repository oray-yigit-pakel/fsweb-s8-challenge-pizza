import React from "react";
import { useLocation } from "react-router-dom";

import "../miniCssComponents/siparisOnayi.css";

export default function SiparisOnayi() {
  const location = useLocation();
  const { siparis } = location.state || {};

  return (
    <>
      <header id="onay-header-container">
        <h1 id="onay-title-h1">Teknolojik Yemekler</h1>
        <p id="onay-italik-yazi">lezzetin yolda</p>
        <p id="onay-yazisi">SİPARİŞ ALINDI</p>
        <p id="absolute-yazi">Position Absolute Acı Pizza</p>

        <section className="siparis-özeti-container">
          <p>
            <span>Boyut: </span>
            <span className="onay-span-bold">{siparis?.boyut || "-"}</span>
          </p>
          <p>
            <span>Hamur: </span>
            <span className="onay-span-bold">{siparis?.kenar || "-"}</span>
          </p>
          <p>
            <span>Ek Malzemeler: </span>
            <span className="onay-span-bold">
              {siparis?.ekstraMalzemeler?.length > 0
                ? siparis.ekstraMalzemeler.join(", ")
                : "Seçilmedi"}
            </span>
          </p>
        </section>

        <section className="siparis-fiyat-container">
          <h5>Sipariş Toplamı</h5>
          <p style={{ paddingTop: "20px" }}>
            <span style={{ paddingRight: "100px", fontSize: "18px" }}>
              Seçimler
            </span>
            <span>{siparis?.ekstraMalzemeFiyati || "0.00"} ₺</span>
          </p>
          <p>
            <span style={{ paddingRight: "112px", fontSize: "18px" }}>
              Toplam
            </span>
            <span>{siparis?.toplamFiyat || "0.00"} ₺</span>
          </p>
        </section>
      </header>
    </>
  );
}
