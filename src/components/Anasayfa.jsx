import { NavLink } from "react-router-dom";
import NavigationMenu from "../miniComponents/navigationMenu";
import "../App.css";
import StatikButtons from "../miniComponents/StatikButtons";
import Footer from "../miniComponents/Footer";
import "../miniCssComponents/footer.css";
import { useHistory } from "react-router-dom";


export default function Anasayfa() {
  const history = useHistory();

  const siparisFormunaGit = () => {
    history.push("/siparisform"); // URL string olmalı
  };

  return (
    <>
      <header>
        <div className="anasayfa-header-container">
          <h1 id="anasayfa-h1">Teknolojik Yemekler</h1>
          <p id="anasayfa-firsat">fırsatı kaçırma</p>
          <p className="anasayfa-p">KOD ACIKTIRIR </p>
          <p className="anasayfa-p">PİZZA, DOYURUR</p>
          <button
            onClick={siparisFormunaGit}
            className="anasayfa-aciktim-button"
          >
            ACIKTIM
          </button>
        </div>
        <NavigationMenu />
      </header>
      <main className="anasayfa-main-1">
        <section className="anasayfa-resimler-container">
          <section className="anasayfa-section1-resimler-1">
            <p className="ozel">Özel</p>
            <p className="lezzetus">Lezzetus</p>
            <p id="acı-burger">Position:Absolute Acı Burger</p>
            <button
              onClick={siparisFormunaGit}
              id="anasayfa-lezzetus-siparisver-butonu"
            >
              Sipariş Ver
            </button>
          </section>
          <section className="anasayfa-section2-resimler">
            <div id="anasayfa-hackathlon">
              <p id="hackathlon-p">Hackathlon</p>
              <p id="hackathlon-p2">Burger Menü</p>
              <button
                onClick={siparisFormunaGit}
                id="anasayfa-hackathlon-siparisver-butonu"
              >
                Sipariş Ver
              </button>
            </div>
            <div id="anasayfa-npm-kurye">
              <p id="npm-p" style={{ marginTop: "30px" }}>
                <span style={{ color: "red", marginLeft: "30px" }}>
                  Çoooook{" "}
                </span>
                hızlı
              </p>
              <p id="npm-p2">npm gibi kurye</p>
              <button
                onClick={siparisFormunaGit}
                id="anasayfa-npm-siparisver-butonu"
              >
                Sipariş Ver
              </button>
            </div>
          </section>
        </section>
      </main>
      <p id="anasayfa-pson">En çok paketlenen menüler</p>
      <p id="anasayfa-pson2">Acıktıran Kodlara Doyuran Lezzetler</p>
      <StatikButtons />
      <aside className="reklam-aside">
        <div className="anasayfa-aside-div">
          <img
            src="images/iteration-2-images/pictures/food-1.png"
            alt="Terminal Pizza"
          />
          <p className="anasayfa-aside-p1">Terminal Pizza</p>
          <p className="anasayfa-aside-p2">
            <span style={{ marginRight: "120px", marginLeft: "36px" }}>
              4.9
            </span>{" "}
            <span style={{ marginRight: "50px" }}>(200)</span>{" "}
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>60₺</span>
          </p>
        </div>
        <div className="anasayfa-aside-div">
          <img
            src="images/iteration-2-images/pictures/food-2.png"
            alt="Position Absolute Acı Pizza"
          />
          <p className="anasayfa-aside-p1">Position Absolute Acı Pizza</p>
          <p className="anasayfa-aside-p2">
            <span style={{ marginRight: "120px", marginLeft: "36px" }}>
              4.9
            </span>{" "}
            <span style={{ marginRight: "50px" }}>(200)</span>{" "}
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>60₺</span>
          </p>
        </div>
        <div className="anasayfa-aside-div">
          <img
            src="images/iteration-2-images/pictures/food-3.png"
            alt="useEffect Tavuklu Burger"
          />
          <p className="anasayfa-aside-p1">useEffect Tavuklu Burger</p>
          <p className="anasayfa-aside-p2">
            <span style={{ marginRight: "120px", marginLeft: "36px" }}>
              4.9
            </span>{" "}
            <span style={{ marginRight: "50px" }}>(200)</span>{" "}
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>60₺</span>
          </p>
        </div>
      </aside>
      <Footer />
    </>
  );
}
