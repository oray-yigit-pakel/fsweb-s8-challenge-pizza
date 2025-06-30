import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import PizzaBoyutu from "../miniComponents/PizzaBoyutu";
import EkMalzemeler from "../miniComponents/EkMalzemeler";
import PizzaKenar from "../miniComponents/PizzaKenar";
import Footer from "../miniComponents/Footer";
import SiparisVer from "../miniComponents/SiparisVer";
import "../miniCssComponents/siparisForm.css";

export default function SiparisForm() {
  /* const bosPizza = {
    adet: 0,
    boyut: "",
    ekstraMalzemeler: [],
    kenar: "",
  };
  const [pizza, setPizza] = useState(bosPizza);
  const [fiyat, setFiyat] = useState(0);
*/
  const secilenMalzemeler = [
    "Soğan",
    "Domates",
    "Mısır",
    "Jalapeno",
    "Sarımsak",
    "Biber",
    "Sucuk",
  ];
  function azalt() {
    console.log("merhaba");
  }
  function arttir() {
    console.log("merhaba");
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("merhaba");
  }
  function handleChange() {
    console.log("merhaba");
  }
  return (
    <>
      <header className="order-header">
        <h1>Teknolojik Yemekler</h1>
      </header>
      <main className="order-banner-container">
        <img
          id="order-banner-img"
          src="./images/iteration-2-images/pictures/form-banner.png"
        />
        <nav id="order-nav-container">
          <NavLink exact to="/Anasayfa">
            Anasayfa
          </NavLink>
          <a href="#order-secenekler">Seçenekler</a>
          <a href="#order-siparis">Sipariş Oluştur</a>
        </nav>

        <h2 id="order-banner-h2">Position Absolute Acı Pizza</h2>
        <section id="order-reklam-section">
          <p>
            <span
              style={{
                fontFamily: "barlow",
                fontSize: "28px",
                marginRight: "300px",
              }}
            >
              85.50tl
            </span>
            <span style={{ marginRight: "120px" }}>4.9</span>
            <span>(200)</span>
          </p>
        </section>
        <article id="order-reklam-article">
          Frontend Dev olarak hala position : absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemeler ile kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
        </article>
      </main>

      <div id="order-secenekler">
        <form onChange={handleChange}>
          <div id="order-boyut-section">
            <h4 style={{marginTop:"30px"}}>
              Boyut Seç<span style={{color: "red"}}>*</span>
            </h4>
            <div id="boyut-buton-div">
              <PizzaBoyutu onChange={handleChange} />
            </div>
          </div>
        </form>
        <div id="order-hamursec-div">
          <PizzaKenar onChange={handleChange} />
        </div>
      </div>
      <div id="order-ekmalzemeler-container">
        <h3 className="ekmalzeme-h3">Ek malzemeler</h3>
        <p className="ekmalzeme-p">En fazla 10 Malzeme seçebilirsiniz. 5₺</p>
        <div id="ekmalzeme-checkbox">
          <EkMalzemeler
            secilenler={secilenMalzemeler}
            onChange={handleChange}
          />
        </div>
      </div>
      <form className="order-label-isim"id="order-form">
        <label htmlFor="isim">İsim</label>
        <input
          type="text"
          id="isim"
          name="isim"
          placeholder="Lütfen isminizi giriniz"
        />
        <label className="order-label-not"htmlFor="siparisNotu">Sipariş notu</label>
        <textarea
          id="siparisNotu"
          name="siparisNotu"
          placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
        />
      </form>
      <div id="order-button-container">
        <div id="order-arttir-button-div">
          <button className="arttir-azalt-butons" onClick={azalt}>
            -
          </button>
          <span id="arttir-azalt-span">1</span>
          <button className="arttir-azalt-butons" onClick={arttir}>
            +
          </button>
        </div >
        <SiparisVer onSubmit={handleSubmit} />
      </div>
      
    </>
  );
}
