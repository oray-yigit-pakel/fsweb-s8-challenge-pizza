import React from "react";
import Footer from "../miniComponents/Footer";
import "../miniCssComponents/siparisOnayi.css";
export default function SiparisOnayi() {
  return (
    <>
      <header id="onay-header-container">
        <h1 id="onay-title-h1">Teknolojik Yemekler</h1>
        <p id="onay-italik-yazi">lezzetin yolda</p>
        <p id="onay-yazisi">SİPARİŞ ALINDI</p>
        <p id="absolute-yazi">Position Absolute Acı Pizza</p>
        <section className="siparis-özeti-container">
          <p>
            <span>Boyut: </span> <span className="onay-span-bold">boyut</span>
          </p>
          <p>
            <span>Hamur:</span>{" "}
            <span className="onay-span-bold">hamur tipi</span>
          </p>
          <p>
            <span>Ek Malzemeler:</span>{" "}
            <span className="onay-span-bold">Ek malzemeler</span>
          </p>
        </section>
        <section className="siparis-fiyat-container">
          <h5>Sipariş Toplamı</h5>
          <p style={{ paddingTop: "20px" }}>
            <span style={{ paddingRight: "100px", fontSize: "18px" }}>
              Seçimler
            </span>{" "}
            <span>fiyat</span>
          </p>
          <p>
            <span style={{ paddingRight: "112px", fontSize: "18px" }}>
              Toplam
            </span>{" "}
            <span>Fiyat</span>
          </p>
        </section>
      </header>
      
    </>
  );
}
