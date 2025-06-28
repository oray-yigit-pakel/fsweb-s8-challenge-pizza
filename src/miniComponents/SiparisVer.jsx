import React from "react";
export default function SiparisVer({ onSubmit }) {
  return (
    <div>
      <div>
        <h5>Sipariş Toplamı</h5>
        <p>
          <span>Seçimler</span> <span>secimler fiyat</span>
        </p>
        <p>
          <span>Toplam</span> <span>Toplam Fiyat</span>
        </p>
      </div>
      <button onClick={onSubmit}>SİPARİŞ VER</button>
    </div>
  );
}
