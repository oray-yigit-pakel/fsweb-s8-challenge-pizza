import { NavLink } from "react-router-dom";
import NavigationMenu from "../miniComponents/navigationMenu";
import "./App.css";
export default function Anasayfa() {
  return (
    <>
      <header>
        <div className="anasayfa-header-container">
          <h1>Teknolojik Yemekler</h1>
          <p>fırsatı kaçırma</p>
          <p>
            KOD ACIKTIRIR
            <br />
            PİZZA, DOYURUR
          </p>
          <button>ACIKTIM</button>
        </div>
        <NavigationMenu />
      </header>
    </>
  );
}
