describe("Teknolojik Yemekler - Pizza Sipariş Formu", () => {
  const pizzaFormPath = "/siparisform";
  const baseUrl = "http://localhost:5174"; // gerektiğinde değiştir

  beforeEach(() => {
    cy.visit(pizzaFormPath);
  });

  it("Sayfa başlığı, banner ve nav linkleri doğru görünüyor", () => {
    cy.get("h1").contains("Teknolojik Yemekler");
    cy.get("nav a").should("have.length", 3);
    cy.get("#order-banner-img").should("be.visible");
  });

  it("Form validasyonları çalışıyor", () => {
    cy.get("button[type='submit']").click();
    cy.get("input[name='isim']")
      .siblings("p")
      .should("contain", "İsim en az 3 karakter olmalıdır");
    cy.get("#boyut-buton-div p").should(
      "contain",
      "Lütfen pizza boyutu seçiniz"
    );
    cy.get("#order-hamursec-div p").should(
      "contain",
      "Lütfen hamur tipi seçiniz"
    );
    cy.get("#order-ekmalzemeler-container p").should(
      "contain",
      "En az 4 malzeme seçiniz"
    );
  });

  it("Form başarılı şekilde doldurulabiliyor ve özet sayfasına yönlendiriyor", () => {
    cy.get("input[name='isim']").type("Oray Yiğit");

    cy.get("input[type='radio'][name='boyut']").first().check({ force: true });
    cy.get("select[name='kenar']").select("İnce");

    cy.get("input[type='checkbox'][name='ekstraMalzemeler']").each(
      ($el, index) => {
        if (index < 4) {
          cy.wrap($el).check({ force: true });
        }
      }
    );

    cy.get("input[name='siparisNotu']").type("Bol peynir olsun lütfen");
    cy.get("button[type='submit']").click();

    cy.url().should("include", "/siparisonayi");
    cy.get("#onay-yazisi").should("contain", "SİPARİŞ ALINDI");
    cy.get(".siparis-özeti-container p").should("have.length", 3);
    cy.get(".siparis-fiyat-container span").contains("Toplam");
  });

  it("4 malzemeden az seçilirse hata veriyor, 11 malzeme seçilemez", () => {
    cy.get("input[name='isim']").type("Test Kullanıcı");
    cy.get("input[type='radio'][name='boyut']").first().check({ force: true });
    cy.get("select[name='kenar']").select("Kalın");

    // 3 checkbox seç, hata beklenir
    cy.get("input[type='checkbox'][name='ekstraMalzemeler']").each(
      ($el, index) => {
        if (index < 3) cy.wrap($el).check({ force: true });
      }
    );

    cy.get("button[type='submit']").click();
    cy.get("#order-ekmalzemeler-container p").should(
      "contain",
      "En az 4 malzeme"
    );

    cy.get("input[type='checkbox'][name='ekstraMalzemeler']").check({
      force: true,
    });
    cy.get("button[type='submit']").click();
    cy.get("#order-ekmalzemeler-container p").should(
      "contain",
      "En fazla 10 malzeme"
    );
  });

  it("Adet arttırma ve azaltma çalışıyor", () => {
    cy.get("#arttir-azalt-span").should("contain", "1");
    cy.get("button:contains('+')").click();
    cy.get("#arttir-azalt-span").should("contain", "2");
    cy.get("button:contains('-')").click().click();
    cy.get("#arttir-azalt-span").should("contain", "1");
  });

  it("Toplam fiyat ekstra malzeme ve adet ile doğru değişiyor", () => {
    cy.get("input[type='checkbox'][name='ekstraMalzemeler']")
      .eq(0)
      .check({ force: true });
    cy.get("input[type='checkbox'][name='ekstraMalzemeler']")
      .eq(1)
      .check({ force: true });
    cy.get("button:contains('+')").click();

    // 2 malzeme x 5₺ = 10₺ + 85.5 = 95.5 x 2 = 191
    cy.get("#order-button-container").should("contain", "191.00");
  });
});
