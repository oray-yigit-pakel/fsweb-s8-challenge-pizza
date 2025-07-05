describe("Teknolojik Yemekler - Pizza Sipariş Formu", () => {
  const pizzaFormPath = "/siparisform";

  beforeEach(() => {
    cy.visit(pizzaFormPath);
  });

  it("Sayfa başlığı, banner ve nav linkleri doğru görünüyor", () => {
    cy.get("h1").contains("Teknolojik Yemekler");
    cy.get("nav a").should("have.length", 3);
    cy.get("#order-banner-img").should("be.visible");
  });

  it("SiparisVer komponenti doğru bilgileri gösteriyor", () => {
    cy.get("[data-cy='siparis-ver-container']").should("be.visible");
    cy.get("[data-cy='siparis-baslik']").should("contain", "Sipariş Toplamı");
    cy.get("[data-cy='toplam-fiyat']").should("contain", "85.50₺"); // Başlangıç fiyatı
    cy.get("[data-cy='ozet-secilenler']").should(
      "contain",
      "Ek malzeme seçilmedi"
    );
  });

  it("Form başarılı şekilde doldurulabiliyor ve özet sayfasına yönlendiriyor", () => {
    // İsim girişi
    cy.get("input[name='isim']").type("Oray Yiğit");

    // Boyut seçimi
    cy.get("[data-cy='boyut-radio']").first().check({ force: true });

    // Hamur seçimi
    cy.get("[data-cy='kenar-select']").select("İnce");

    // 4 malzeme seç
    cy.get("[data-cy='malzeme-checkbox']").each(($el, index) => {
      if (index < 4) {
        cy.wrap($el).check({ force: true });
      }
    });

    // Sipariş notu
    cy.get("textarea[name='siparisNotu']").type("Bol peynir olsun lütfen");

    // Seçilen malzemelerin görüntülendiğini kontrol et
    cy.get("[data-cy='ozet-secilenler']").should(
      "not.contain",
      "Ek malzeme seçilmedi"
    );

    // Sipariş ver
    cy.get("[data-cy='submit-button']").click();

    // Yönlendirme kontrolü
    cy.url().should("include", "/siparisonayi");
  });

  it("Eksik bilgi ile sipariş verilmeye çalışıldığında uyarılar gösteriliyor", () => {
    // Hiçbir şey doldurmadan sipariş vermeye çalış
    cy.get("[data-cy='submit-button']").click();

    // Sayfa hala aynı yerde olmalı (yönlendirme olmamalı)
    cy.url().should("include", "/siparisform");

    // Hata mesajlarının göründüğünü kontrol et
    cy.get("[data-cy='isim-hata']")
      .should("be.visible")
      .and("contain", "İsim en az 3 karakter olmalıdır");
    cy.get("[data-cy='boyut-hata']")
      .should("be.visible")
      .and("contain", "Lütfen pizza boyutu seçiniz");
    cy.get("[data-cy='kenar-hata']")
      .should("be.visible")
      .and("contain", "Lütfen hamur tipi seçiniz");
    cy.get("[data-cy='malzeme-hata']")
      .should("be.visible")
      .and("contain", "En az 4 malzeme seçiniz");
  });

  it("İsim validasyonu - kısa isim hata veriyor", () => {
    // 2 karakterlik isim gir
    cy.get("input[name='isim']").type("Ab");

    // Diğer alanları doldur
    cy.get("[data-cy='boyut-radio']").first().check({ force: true });
    cy.get("[data-cy='kenar-select']").select("Kalın");
    cy.get("[data-cy='malzeme-checkbox']").each(($el, index) => {
      if (index < 4) {
        cy.wrap($el).check({ force: true });
      }
    });

    cy.get("[data-cy='submit-button']").click();
    cy.get("[data-cy='isim-hata']").should(
      "contain",
      "İsim en az 3 karakter olmalıdır"
    );
  });

  it("Malzeme seçimi validasyonu - 4'ten az malzeme hata veriyor", () => {
    cy.get("input[name='isim']").type("Test Kullanıcı");
    cy.get("[data-cy='boyut-radio']").first().check({ force: true });
    cy.get("[data-cy='kenar-select']").select("Kalın");

    // Sadece 3 malzeme seç
    cy.get("[data-cy='malzeme-checkbox']").each(($el, index) => {
      if (index < 3) {
        cy.wrap($el).check({ force: true });
      }
    });

    cy.get("[data-cy='submit-button']").click();
    cy.get("[data-cy='malzeme-hata']").should(
      "contain",
      "En az 4 malzeme seçiniz"
    );
  });

  it("Malzeme seçimi validasyonu - 10'dan fazla malzeme hata veriyor", () => {
    cy.get("input[name='isim']").type("Test Kullanıcı");
    cy.get("[data-cy='boyut-radio']").first().check({ force: true });
    cy.get("[data-cy='kenar-select']").select("Kalın");

    // Tüm malzemeleri seç (13 tane var)
    cy.get("[data-cy='malzeme-checkbox']").check({ force: true });

    cy.get("[data-cy='submit-button']").click();
    cy.get("[data-cy='malzeme-hata']").should(
      "contain",
      "En fazla 10 malzeme seçebilirsiniz"
    );
  });

  it("Boyut seçimi çalışıyor", () => {
    // S boyutunu seç
    cy.get("[data-cy='boyut-radio']").eq(0).check({ force: true });
    cy.get("[data-cy='boyut-radio']").eq(0).should("be.checked");

    // M boyutunu seç
    cy.get("[data-cy='boyut-radio']").eq(1).check({ force: true });
    cy.get("[data-cy='boyut-radio']").eq(1).should("be.checked");
    cy.get("[data-cy='boyut-radio']").eq(0).should("not.be.checked");

    // L boyutunu seç
    cy.get("[data-cy='boyut-radio']").eq(2).check({ force: true });
    cy.get("[data-cy='boyut-radio']").eq(2).should("be.checked");
    cy.get("[data-cy='boyut-radio']").eq(1).should("not.be.checked");
  });

  it("Hamur tipi seçimi çalışıyor", () => {
    // Başlangıçta boş olmalı
    cy.get("[data-cy='kenar-select']").should("have.value", "");

    // Kalın hamur seç
    cy.get("[data-cy='kenar-select']").select("Kalın");
    cy.get("[data-cy='kenar-select']").should("have.value", "Kalın");

    // İnce hamur seç
    cy.get("[data-cy='kenar-select']").select("İnce");
    cy.get("[data-cy='kenar-select']").should("have.value", "İnce");

    // Nefis Kenar seç
    cy.get("[data-cy='kenar-select']").select("Nefis Kenar");
    cy.get("[data-cy='kenar-select']").should("have.value", "Nefis Kenar");
  });

  it("Adet arttırma ve azaltma çalışıyor", () => {
    cy.get("[data-cy='adet-span']").should("contain", "1");

    // Arttır
    cy.get("[data-cy='arttir-button']").click();
    cy.get("[data-cy='adet-span']").should("contain", "2");

    cy.get("[data-cy='arttir-button']").click();
    cy.get("[data-cy='adet-span']").should("contain", "3");

    // Azalt
    cy.get("[data-cy='azalt-button']").click();
    cy.get("[data-cy='adet-span']").should("contain", "2");

    cy.get("[data-cy='azalt-button']").click();
    cy.get("[data-cy='adet-span']").should("contain", "1");

    // 1'den aşağı inmemeli
    cy.get("[data-cy='azalt-button']").click();
    cy.get("[data-cy='adet-span']").should("contain", "1");
  });

  it("Toplam fiyat hesaplama - ekstra malzeme ve adet ile doğru değişiyor", () => {
    // Başlangıç fiyatı
    cy.get("[data-cy='toplam-fiyat']").should("contain", "85.50₺");

    // 2 malzeme seç (2 x 5₺ = 10₺ ekstra)
    cy.get("[data-cy='malzeme-checkbox']").eq(0).check({ force: true });
    cy.get("[data-cy='malzeme-checkbox']").eq(1).check({ force: true });

    // Fiyat: 85.5 + 10 = 95.50₺ olmalı
    cy.get("[data-cy='toplam-fiyat']").should("contain", "95.50₺");

    // Adeti 2'ye çıkar
    cy.get("[data-cy='arttir-button']").click();

    // Fiyat: (85.5 + 10) x 2 = 191.00₺ olmalı
    cy.get("[data-cy='toplam-fiyat']").should("contain", "191.00₺");

    // 2 malzeme daha seç (toplam 4 malzeme = 4 x 5₺ = 20₺ ekstra)
    cy.get("[data-cy='malzeme-checkbox']").eq(2).check({ force: true });
    cy.get("[data-cy='malzeme-checkbox']").eq(3).check({ force: true });

    // Fiyat: (85.5 + 20) x 2 = 211.00₺ olmalı
    cy.get("[data-cy='toplam-fiyat']").should("contain", "211.00₺");
  });

  it("Seçilen malzemeler özette görünüyor", () => {
    // Başlangıçta hiç malzeme seçili değil
    cy.get("[data-cy='ozet-secilenler']").should(
      "contain",
      "Ek malzeme seçilmedi"
    );

    // İlk malzemeyi seç
    cy.get("[data-cy='malzeme-checkbox']").eq(0).check({ force: true });
    cy.get("[data-cy='ozet-secilenler']").should("contain", "Pepperoni");
    cy.get("[data-cy='ozet-secilenler']").should(
      "not.contain",
      "Ek malzeme seçilmedi"
    );

    // İkinci malzemeyi de seç
    cy.get("[data-cy='malzeme-checkbox']").eq(1).check({ force: true });
    cy.get("[data-cy='ozet-secilenler']").should("contain", "Pepperoni, Sosis");

    // Birinci malzemeyi kaldır
    cy.get("[data-cy='malzeme-checkbox']").eq(0).uncheck({ force: true });
    cy.get("[data-cy='ozet-secilenler']").should("contain", "Sosis");
    cy.get("[data-cy='ozet-secilenler']").should("not.contain", "Pepperoni");
  });

  it("Form elemanları data-cy attribute'ları ile erişilebiliyor", () => {
    // Tüm önemli elemanların varlığını kontrol et
    cy.get("[data-cy='isim-input']").should("be.visible");
    cy.get("[data-cy='not-input']").should("be.visible");
    cy.get("[data-cy='boyut-radio']").should("have.length", 3);
    cy.get("[data-cy='kenar-select']").should("be.visible");
    cy.get("[data-cy='malzeme-checkbox']").should("have.length", 13);
    cy.get("[data-cy='azalt-button']").should("be.visible");
    cy.get("[data-cy='arttir-button']").should("be.visible");
    cy.get("[data-cy='adet-span']").should("be.visible");
    cy.get("[data-cy='submit-button']").should("be.visible");
    cy.get("[data-cy='siparis-ver-container']").should("be.visible");
    cy.get("[data-cy='toplam-fiyat']").should("be.visible");
    cy.get("[data-cy='ozet-secilenler']").should("be.visible");
  });

  it("Tam senaryo testi - sıfırdan tamamlanmış sipariş", () => {
    // 1. İsim gir
    cy.get("input[name='isim']").type("Ahmet Yılmaz");

    // 2. Boyut seç (M)
    cy.get("[data-cy='boyut-radio']").eq(1).check({ force: true });

    // 3. Hamur tipi seç
    cy.get("[data-cy='kenar-select']").select("Nefis Kenar");

    // 4. Tam 5 malzeme seç
    const malzemeler = [
      "Pepperoni",
      "Sosis",
      "Kanada Jambonu",
      "Tavuk Izgara",
      "Soğan",
    ];
    cy.get("[data-cy='malzeme-checkbox']").each(($el, index) => {
      if (index < 5) {
        cy.wrap($el).check({ force: true });
      }
    });

    // 5. Sipariş notu yaz
    cy.get("textarea[name='siparisNotu']").type(
      "Extra peynir ve az pişmiş olsun"
    );

    // 6. Adeti 3'e çıkar
    cy.get("[data-cy='arttir-button']").click().click();

    // 7. Fiyatın doğru hesaplandığını kontrol et
    // (85.5 + 25) x 3 = 331.50₺
    cy.get("[data-cy='toplam-fiyat']").should("contain", "331.50₺");

    // 8. Seçilen malzemelerin görüntülendiğini kontrol et
    cy.get("[data-cy='ozet-secilenler']").should(
      "contain",
      "Pepperoni, Sosis, Kanada Jambonu, Tavuk Izgara, Soğan"
    );

    // 9. Sipariş ver
    cy.get("[data-cy='submit-button']").click();

    // 10. Başarılı yönlendirme kontrolü
    cy.url().should("include", "/siparisonayi");
  });
});
