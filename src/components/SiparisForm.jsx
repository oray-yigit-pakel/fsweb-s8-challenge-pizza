import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import React from "react";
import PizzaBoyutu from "../miniComponents/PizzaBoyutu";
import EkMalzemeler from "../miniComponents/EkMalzemeler";
import PizzaKenar from "../miniComponents/PizzaKenar";
import Footer from "../miniComponents/Footer";
import SiparisVer from "../miniComponents/SiparisVer";
import "../miniCssComponents/siparisForm.css";
import axios from "axios";

export default function SiparisForm() {
  const history = useHistory();

  const bosPizza = {
    adet: 1,
    boyut: "",
    ekstraMalzemeler: [],
    kenar: "",
    isim: "",
    siparisNotu: "",
  };

  const initialErrors = {
    isim: false,
    boyut: false,
    kenar: false,
    ekstraMalzemeler: false,
  };

  const [pizza, setPizza] = useState(bosPizza);
  const [fiyat, setFiyat] = useState(85.5);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const hesaplaFiyat = () => {
    let baseFiyat = 85.5;
    let ekstraMalzemeFiyat = pizza.ekstraMalzemeler.length * 5;
    let toplamFiyat = (baseFiyat + ekstraMalzemeFiyat) * pizza.adet;
    setFiyat(toplamFiyat);
    return toplamFiyat;
  };

  const isNameValid = (value) => {
    return value.trim().length >= 3;
  };

  const validateForm = () => {
    const errors = {
      isim: false,
      boyut: false,
      kenar: false,
      ekstraMalzemeler: false,
    };

    if (!isNameValid(pizza.isim)) {
      errors.isim = "İsim en az 3 karakter olmalıdır";
    }

    if (!pizza.boyut) {
      errors.boyut = "Lütfen pizza boyutu seçiniz";
    }

    if (!pizza.kenar) {
      errors.kenar = "Lütfen hamur tipi seçiniz";
    }

    if (pizza.ekstraMalzemeler.length < 4) {
      errors.ekstraMalzemeler = "En az 4 malzeme seçiniz";
    } else if (pizza.ekstraMalzemeler.length > 10) {
      errors.ekstraMalzemeler = "En fazla 10 malzeme seçebilirsiniz";
    }

    setFormErrors(errors);

    // Hata yoksa true döner
    return !Object.values(errors).some((error) => error !== false);
  };

  function azalt() {
    if (pizza.adet > 1) {
      setPizza((prev) => ({ ...prev, adet: prev.adet - 1 }));
    }
  }

  function arttir() {
    setPizza((prev) => ({ ...prev, adet: prev.adet + 1 }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Formda hatalar var");
      return;
    }

    const siparisVerisi = {
      isim: pizza.isim,
      boyut: pizza.boyut,
      kenar: pizza.kenar,
      ekstraMalzemeler: pizza.ekstraMalzemeler,
      adet: pizza.adet,
      siparisNotu: pizza.siparisNotu,
      toplamFiyat: fiyat.toFixed(2),
    };

    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        siparisVerisi,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );

      console.log("API'den gelen yanıt:", response.data);
      history.push("/siparisonayi");
      alert("Siparişiniz başarıyla alındı!");
    } catch (error) {
      console.error("API isteğinde hata oluştu:", error);
      alert("Sipariş gönderilemedi, lütfen tekrar deneyin.");
    }
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox" && name === "ekstraMalzemeler") {
      setPizza((prev) => ({
        ...prev,
        ekstraMalzemeler: checked
          ? [...prev.ekstraMalzemeler, value]
          : prev.ekstraMalzemeler.filter((item) => item !== value),
      }));
    } else {
      setPizza((prev) => ({ ...prev, [name]: value }));
    }
  }

  useEffect(() => {
    hesaplaFiyat();
  }, [pizza.adet, pizza.ekstraMalzemeler]);

  const secilenMalzemeler =
    pizza.ekstraMalzemeler.length > 0
      ? pizza.ekstraMalzemeler.join(", ")
      : "Ek malzeme seçilmedi";

  return (
    <>
      <header className="order-header">
        <h1>Teknolojik Yemekler</h1>
      </header>
      <main className="order-banner-container">
        <img
          id="order-banner-img"
          src="./images/iteration-2-images/pictures/form-banner.png"
          alt="Pizza Banner"
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
        <div id="order-boyut-section">
          <h4 style={{ marginTop: "30px" }}>
            Boyut Seç<span style={{ color: "red" }}>*</span>
          </h4>
          <div id="boyut-buton-div">
            <PizzaBoyutu value={pizza.boyut} onChange={handleChange} />
          </div>
          {formErrors.boyut && (
            <p style={{ color: "red", fontSize: "14px" }}>{formErrors.boyut}</p>
          )}
        </div>
        <div id="order-hamursec-div">
          <PizzaKenar value={pizza.kenar} onChange={handleChange} />
          {formErrors.kenar && (
            <p style={{ color: "red", fontSize: "14px" }}>{formErrors.kenar}</p>
          )}
        </div>
      </div>
      <div id="order-ekmalzemeler-container">
        <h3 className="ekmalzeme-h3">Ek malzemeler</h3>
        <p className="ekmalzeme-p">En fazla 10 Malzeme seçebilirsiniz. 5₺</p>
        <div id="ekmalzeme-checkbox">
          <EkMalzemeler
            secilenler={pizza.ekstraMalzemeler}
            onChange={handleChange}
          />
        </div>
        {formErrors.ekstraMalzemeler && (
          <p style={{ color: "red", fontSize: "14px" }}>
            {formErrors.ekstraMalzemeler}
          </p>
        )}
      </div>
      <form
        className="order-label-isim"
        id="order-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="isim">İsim</label>
        <input
          onChange={handleChange}
          type="text"
          id="isim"
          name="isim"
          value={pizza.isim}
          placeholder="Lütfen isminizi giriniz"
        />
        {formErrors.isim && (
          <p style={{ color: "red", fontSize: "14px" }}>{formErrors.isim}</p>
        )}
        <label className="order-label-not" htmlFor="siparisNotu">
          Sipariş notu
        </label>
        <textarea
          id="siparisNotu"
          name="siparisNotu"
          value={pizza.siparisNotu}
          onChange={handleChange}
          placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
        />
      </form>
      <div id="order-button-container">
        <div id="order-arttir-button-div">
          <button
            type="button"
            id="order-siparis"
            className="arttir-azalt-butons"
            onClick={azalt}
          >
            -
          </button>
          <span id="arttir-azalt-span">{pizza.adet}</span>
          <button
            type="button"
            className="arttir-azalt-butons"
            onClick={arttir}
          >
            +
          </button>
        </div>
        <SiparisVer
          onSubmit={handleSubmit}
          toplam={fiyat.toFixed(2)}
          secilenler={secilenMalzemeler}
        />
      </div>
    </>
  );
}
