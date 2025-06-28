import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import PizzaBoyutu from "../miniComponents/PizzaBoyutu";
import EkMalzemeler from "../miniComponents/EkMalzemeler";
import PizzaKenar from "../miniComponents/PizzaKenar";
import Footer from "../miniComponents/Footer";

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
  return (
    <>
      <header className="orderheader">
        <h1>Teknolojik Yemekler</h1>
      </header>
      <div className="orderbanner">
        <img src="./images/iteration-2-images/pictures/form-banner.png" />
        <nav>
          <NavLink exact to="/Anasayfa">
            Anasayfa
          </NavLink>
          <a href="#secenekler">Seçenekler</a>
          <a href="#siparis">Sipariş Oluştur</a>
        </nav>

        <h2>Position Absolute Acı Pizza</h2>
        <div>
          <p>
            <span>85.50tl</span>
            <span>4.9</span>
            <span>(200)</span>
          </p>
        </div>
        <p>
          Frontend Dev olarak hala position : absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemeler ile kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>

      <div id="secenekler">
        <div>
          <h1>
            Boyut Seç<span>*</span>
          </h1>
          <div>
            <PizzaBoyutu />
          </div>
        </div>
        <div>
          <PizzaKenar />
        </div>
      </div>
      <div>
        <h3>Ek malzemeler</h3>
        <p>En fazla 10 Malzeme seçebilirsiniz. 5₺</p>
        <div>
          <EkMalzemeler />
        </div>
      </div>
      <form>
        <label htmlFor="siparisNotu">Sipariş notu</label>
        <textarea
          id="siparisNotu"
          name="siparisNotu"
          placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
        />
      </form>
      <div>
        <div>
          <button onClick={azalt}>-</button>
          <span>{adet}</span>
          <button onClick={arttir}>+</button>
        </div>
        <SiparisVer onSubmit={handleSubmit} />
      </div>
      <Footer />
    </>
  );
}
