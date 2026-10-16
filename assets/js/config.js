/*
 * ============================================================
 *  MARKA AYARLARI
 * ============================================================
 *  Sitedeki tüm marka bilgileri buradan gelir.
 *  Marka adını değiştirmek için sadece `brand` değerini değiştirin;
 *  tüm sayfalar, ürün adları ("Sense CRM" -> "Yeni CRM"), başlıklar
 *  ve footer otomatik güncellenir.
 *
 *  Metinlerde şu yer tutucuları kullanabilirsiniz:
 *    {{brand}}      -> Marka adı               (Sense)
 *    {{suite}}      -> Suite adı               (Business Suite)
 *    {{company}}    -> Şirket ünvanı
 *    {{phone}}      -> Telefon
 *    {{email}}      -> E-posta
 *    {{domain}}     -> Alan adı
 *    {{trialDays}}  -> Ücretsiz deneme süresi
 *    {{year}}       -> İçinde bulunulan yıl
 * ============================================================
 */
window.SITE_CONFIG = {
  brand: "Sense",
  suite: "Business Suite",
  tagline: "Ortak Veri ve Süreç Platformu",
  company: "{{brand}} Yazılım A.Ş.",
  domain: "sense.com.tr",
  phone: "(0212) 000 00 00",
  email: "merhaba@{{domain}}",
  address: "Maslak Mah. Teknoloji Cad. No:1, Sarıyer / İstanbul",
  trialDays: 14,

  // Uygulama bağlantıları
  loginUrl: "#giris",
  signupUrl: "{{root}}iletisim.html#demo",

  // Logo: null bırakılırsa marka adından otomatik logo üretilir.
  // Kendi logonuz için örn: "assets/img/logo.svg" (kök dizine göre)
  logo: null,
  logoLight: null, // koyu zeminde kullanılacak logo (opsiyonel)

  // Ana renkler (CSS değişkenlerine aktarılır)
  colors: {
    primary: "#2f6bff",
    primaryDark: "#1d4fd8",
    navy: "#081538",
  },

  social: {
    linkedin: "#",
    instagram: "#",
    youtube: "#",
    x: "#",
  },
};
