import React from "react";
import "../miniCssComponents/footer.css";
export default function Footer() {
  return (
    <footer className="footercontainer">
      <div id="footer-main">
        {/* Logo ve İletişim */}

        <address className="adres-section">
          <img
            src="./images/iteration-2-images/footer/logo-footer.svg"
            alt="footer-logo"
            id="footer-logo"
          />
          <div className="footer-mini-icons">
            <img
              src="/images/iteration-2-images/footer/icons/icon-1.png"
              alt="Adres ikonu"
            />
            <span
              style={{
                marginLeft: "15px",
              }}
              className="footer-p"
            >
              341 Londonderry Road, Istanbul Türkiye
            </span>
          </div>
          <div className="footer-mini-icons">
            <img
              src="/images/iteration-2-images/footer/icons/icon-2.png"
              alt="Mail ikonu"
            />
            <span className="footer-p">
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "15px",
                }}
                href="mailto:aciktim@teknolojikyemekler.com"
              >
                aciktim@teknolojikyemekler.com
              </a>
            </span>
          </div>
          <div className="footer-mini-icons">
            <img
              src="/images/iteration-2-images/footer/icons/icon-3.png"
              alt="Telefon ikonu"
            />
            <span className="footer-p">
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "15px",
                }}
                href="tel:+902161234567"
              >
                +90 216 123 45 67
              </a>
            </span>
          </div>
        </address>

        {/* Menü */}
        <nav aria-label="Hot Menu" id="hot-menu-section">
          <h2 className="footer-h2">Hot Menu</h2>
          <p className="footer-p">Terminal Pizza</p>
          <p className="footer-p">5 Kişilik Hackathlon Pizza</p>
          <p className="footer-p">useEffect Tavuklu Pizza</p>
          <p className="footer-p">Beyaz Console Frosty</p>
          <p className="footer-p">Testler Geçti Mutlu Burger</p>
          <p className="footer-p">Position Absolute Acı Burger</p>
        </nav>

        {/* Instagram */}
        <section id="instagram-section">
          <h2 className="footer-h2">Instagram</h2>
          <div id="instagram-foto-section">
            <img
              src="./images/iteration-2-images/footer/insta/li-0.png"
              alt="insta-icon-1"
            />
            <img
              src="./images/iteration-2-images/footer/insta/li-1.png"
              alt="insta-icon-2"
            />
            <img
              src="./images/iteration-2-images/footer/insta/li-2.png"
              alt="insta-icon-3"
            />
            <img
              src="./images/iteration-2-images/footer/insta/li-3.png"
              alt="insta-icon-4"
            />
            <img
              src="./images/iteration-2-images/footer/insta/li-4.png"
              alt="insta-icon-5"
            />
            <img
              src="./images/iteration-2-images/footer/insta/li-5.png"
              alt="insta-icon-6"
            />
          </div>
        </section>
      </div>

      <div className="copyright-container">
        <p
          style={{
            marginLeft: "120px",
            fontSize: "16px",
            fontFamily: "barlow",
          }}
        >
          © 2023 Teknolojik Yemekler.
        </p>
      </div>
    </footer>
  );
}
