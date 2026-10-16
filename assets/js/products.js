/*
 * ============================================================
 *  ÜRÜN VERİLERİ
 * ============================================================
 *  Her ürünün landing page'i bu veriden üretilir.
 *  Yeni ürün eklemek için:
 *   1) Aşağıdaki listeye yeni bir obje ekleyin (slug benzersiz olmalı)
 *   2) urunler/ klasöründe <slug>.html dosyası oluşturun
 *      (mevcut bir dosyayı kopyalayıp data-product değerini değiştirin)
 *
 *  `group` değerleri: finans | musteri | operasyon | insan
 *  `icon` değerleri: assets/js/icons.js içindeki anahtarlar
 * ============================================================
 */
window.PRODUCT_GROUPS = [
  { id: "finans", name: "Finans & Muhasebe", icon: "wallet" },
  { id: "musteri", name: "Satış & Müşteri", icon: "target" },
  { id: "operasyon", name: "Operasyon & Süreç", icon: "layers" },
  { id: "insan", name: "İnsan Kaynakları", icon: "users" },
];

window.PRODUCTS = [
  /* ---------------------------------------------------------- HR */
  {
    slug: "hr",
    name: "{{brand}} HR",
    short: "HR",
    category: "İnsan Kaynakları",
    group: "insan",
    icon: "users",
    color: "#3b82f6",
    summary: "Personel özlük, izin, bordro öncesi puantaj ve performans süreçlerini tek yerden yönetin.",
    hero: {
      title: "İnsan kaynakları süreçleriniz",
      highlight: "kâğıttan kurtulsun.",
      text: "Özlük dosyalarından izin taleplerine, işe alımdan performans değerlendirmeye kadar tüm İK süreçlerinizi {{brand}} HR ile dijitalleştirin. Çalışanlarınız self-servis portaldan taleplerini kendileri oluştursun.",
    },
    stats: [
      { value: "%70", label: "daha az İK operasyon yükü" },
      { value: "3 dk", label: "ortalama izin onay süresi" },
      { value: "7/24", label: "çalışan self-servis erişimi" },
    ],
    features: [
      { icon: "folder", title: "Dijital Özlük Dosyası", text: "Sözleşme, diploma, sağlık raporu gibi tüm belgeler çalışan kartında güvenle saklanır." },
      { icon: "calendar", title: "İzin Yönetimi", text: "Yıllık, mazeret ve ücretsiz izinler kanuna uygun hak edişlerle otomatik hesaplanır." },
      { icon: "clock", title: "Puantaj & Vardiya", text: "Giriş-çıkış verileri, fazla mesai ve vardiya planları bordroya hazır hale gelir." },
      { icon: "award", title: "Performans Değerlendirme", text: "Hedef, yetkinlik ve 360° değerlendirme döngülerini kolayca kurgulayın." },
      { icon: "search", title: "İşe Alım (ATS)", text: "İlan, aday havuzu, mülakat planlama ve teklif süreçleri tek akışta." },
      { icon: "smartphone", title: "Çalışan Portalı", text: "Bordro pusulası, izin talebi ve masraf bildirimi mobilden saniyeler içinde." },
    ],
    sections: [
      {
        eyebrow: "Self-servis",
        title: "Çalışanlarınız talep oluştursun, yöneticiler tek tıkla onaylasın",
        text: "İzin, avans, masraf ve belge talepleri tanımladığınız onay akışlarıyla doğru kişiye ulaşır. Herkes sürecin nerede olduğunu anlık görür.",
        bullets: ["Çok seviyeli onay akışları", "Mobil bildirimler ve e-posta hatırlatmaları", "Ekip takvimi ile çakışma kontrolü"],
        mock: "list",
      },
      {
        eyebrow: "Raporlama",
        title: "İş gücünüzü verilerle yönetin",
        text: "Personel devir hızı, devamsızlık oranı, departman bazlı maliyet ve kıdem dağılımı gibi metrikleri hazır panolarla izleyin.",
        bullets: ["Hazır İK panoları", "Excel'e tek tıkla aktarım", "Departman ve lokasyon bazlı filtreler"],
        mock: "chart",
      },
    ],
    steps: [
      { title: "Personeli aktarın", text: "Excel şablonuyla mevcut çalışan listenizi dakikalar içinde yükleyin." },
      { title: "Kuralları tanımlayın", text: "İzin politikaları, vardiyalar ve onay akışlarını şirketinize göre ayarlayın." },
      { title: "Portalı açın", text: "Çalışanlarınız davet e-postasıyla self-servis portala giriş yapsın." },
    ],
    related: ["surec", "dokuman", "muhasebe"],
    pricing: [
      { price: "39", unit: "₺ / çalışan / ay", features: ["Dijital özlük dosyası", "İzin yönetimi", "Çalışan portalı", "50 çalışana kadar"] },
      { price: "69", unit: "₺ / çalışan / ay", features: ["Başlangıç paketindeki her şey", "Puantaj & vardiya", "Performans değerlendirme", "Gelişmiş onay akışları"] },
      { features: ["Profesyonel paketteki her şey", "İşe alım (ATS) modülü", "SSO & LDAP entegrasyonu", "Özel sözleşme ve SLA"] },
    ],
    testimonial: { quote: "İzin ve özlük takibini Excel'den çıkarıp {{brand}} HR üzerine taşıdık. İK ekibimiz artık evrakla değil, insanlarla ilgileniyor.", name: "Elif T.", role: "İK Müdürü, Perakende" },
    faq: [
      { q: "Bordro hesaplaması yapıyor mu?", a: "{{brand}} HR puantaj ve izin verilerini bordroya hazır hale getirir; {{brand}} Muhasebe veya kullandığınız bordro programına aktarım sağlar." },
      { q: "KVKK'ya uygun mu?", a: "Evet. Veriler Türkiye'deki veri merkezlerinde şifreli saklanır, rol bazlı yetkilendirme ve erişim logları tutulur." },
      { q: "PDKS cihazlarıyla entegre olur mu?", a: "Yaygın PDKS cihazlarıyla API veya dosya aktarımı üzerinden entegre çalışır." },
      { q: "Çalışanlar mobil uygulamayı kullanabilir mi?", a: "Evet, iOS ve Android uygulamalarıyla izin talebi, bordro pusulası ve duyurulara erişebilirler." },
    ],
    mock: {
      title: "İK Panosu",
      kpis: [
        { l: "Aktif Çalışan", v: "248", d: "+6" },
        { l: "Bekleyen İzin", v: "12", d: "-3" },
        { l: "Devir Hızı", v: "%4,2", d: "-0,8" },
      ],
      bars: [42, 55, 48, 62, 58, 70, 66, 74],
      rows: [
        { t: "Ahmet Y. — Yıllık İzin", m: "3 gün · 21-23 Ekim", s: "Onay Bekliyor", c: "warn" },
        { t: "Zeynep K. — Masraf", m: "₺1.240 · Yol", s: "Onaylandı", c: "ok" },
        { t: "Mert A. — Belge Talebi", m: "Çalışma belgesi", s: "Hazırlanıyor", c: "info" },
      ],
    },
  },

  /* ---------------------------------------------------------- SİGORTA TEKLİF */
  {
    slug: "teklif",
    name: "{{brand}} Hızlı Teklif",
    short: "Hızlı Teklif",
    category: "Sigorta Acentesi Hızlı Teklif",
    group: "musteri",
    icon: "shieldCheck",
    color: "#16a34a",
    summary: "Sigorta şirketlerinden tek ekranda hızlı, doğru ve karşılaştırmalı teklif alın.",
    hero: {
      title: "Tek ekrandan tüm sigorta şirketlerine",
      highlight: "saniyeler içinde teklif.",
      text: "Trafik, kasko, DASK, konut ve sağlık ürünlerinde müşteri bilgisini bir kez girin; anlaşmalı sigorta şirketlerinden gelen teklifleri yan yana karşılaştırın, poliçeyi dakikalar içinde kesin.",
    },
    stats: [
      { value: "20+", label: "sigorta şirketi entegrasyonu" },
      { value: "45 sn", label: "ortalama teklif toplama süresi" },
      { value: "%35", label: "daha yüksek teklif dönüşümü" },
    ],
    features: [
      { icon: "zap", title: "Toplu Teklif", text: "Tek form ile tüm anlaşmalı şirketlerden eş zamanlı fiyat alın." },
      { icon: "scale", title: "Karşılaştırma Tablosu", text: "Prim, teminat, muafiyet ve asistans hizmetlerini yan yana görün." },
      { icon: "send", title: "Müşteriye Paylaşım", text: "Kurumsal görünümlü teklif PDF'ini WhatsApp, SMS veya e-posta ile gönderin." },
      { icon: "bell", title: "Yenileme Hatırlatma", text: "Vadesi yaklaşan poliçeler için otomatik hatırlatmalar ve yenileme teklifleri." },
      { icon: "database", title: "Müşteri & Poliçe Arşivi", text: "Tüm poliçe geçmişi, hasar kayıtları ve belgeler müşteri kartında." },
      { icon: "chart", title: "Üretim Raporları", text: "Şirket, branş ve temsilci bazında prim üretimi ve komisyon takibi." },
    ],
    sections: [
      {
        eyebrow: "Karşılaştırma",
        title: "Müşterinize en uygun teklifi saniyeler içinde sunun",
        text: "Gelen teklifler fiyat ve teminat kapsamına göre otomatik sıralanır. Önerdiğiniz teklifi işaretleyip müşterinize profesyonel bir karşılaştırma raporu gönderin.",
        bullets: ["Teminat bazlı akıllı sıralama", "Markalı teklif PDF'i", "Tek tıkla poliçeleştirme"],
        mock: "list",
      },
      {
        eyebrow: "Yenileme",
        title: "Hiçbir yenileme fırsatını kaçırmayın",
        text: "Vadesine 30 gün kalan poliçeler otomatik listelenir, yenileme teklifleri arka planda hazırlanır ve müşterinize hatırlatma gönderilir.",
        bullets: ["Otomatik yenileme kuyruğu", "SMS & e-posta şablonları", "Temsilci bazlı görev atama"],
        mock: "chart",
      },
    ],
    steps: [
      { title: "Şirketleri bağlayın", text: "Anlaşmalı olduğunuz sigorta şirketlerinin kullanıcı bilgilerini güvenle tanımlayın." },
      { title: "Bilgiyi bir kez girin", text: "TC/VKN ve plaka ile müşteri ve araç bilgileri otomatik doldurulsun." },
      { title: "Karşılaştırın, satın", text: "Teklifleri karşılaştırın, müşterinize gönderin ve poliçeyi kesin." },
    ],
    related: ["crm", "dokuman", "cari"],
    pricing: [
      { price: "1.490", unit: "₺ / ay", features: ["3 kullanıcı", "Trafik & kasko teklif", "10 sigorta şirketi", "Teklif PDF paylaşımı"] },
      { price: "2.990", unit: "₺ / ay", features: ["10 kullanıcı", "Tüm branşlar", "Sınırsız şirket entegrasyonu", "Yenileme otomasyonu"] },
      { features: ["Sınırsız kullanıcı", "Çoklu şube yönetimi", "Özel entegrasyonlar & API", "Öncelikli destek"] },
    ],
    testimonial: { quote: "Eskiden 6 farklı portala tek tek girerdik. Şimdi müşteri telefondayken tüm teklifleri karşılaştırıp anında sunabiliyoruz.", name: "Murat S.", role: "Acente Sahibi, Sigorta" },
    faq: [
      { q: "Hangi sigorta şirketleriyle çalışıyor?", a: "Türkiye'de faaliyet gösteren önde gelen sigorta şirketlerinin acente portallarıyla entegre çalışır. Güncel liste için bizimle iletişime geçin." },
      { q: "Şirket şifrelerim güvende mi?", a: "Tüm kimlik bilgileri şifreli kasada saklanır; ekibiniz şifreleri görmeden teklif alabilir." },
      { q: "Poliçe kesimi de yapılabiliyor mu?", a: "Evet, desteklenen şirketlerde teklif onaylandıktan sonra poliçe doğrudan {{brand}} üzerinden kesilebilir." },
      { q: "Komisyon takibi yapabilir miyim?", a: "{{brand}} Cari ile birlikte şirket bazlı komisyon mutabakatlarını otomatik yapabilirsiniz." },
    ],
    mock: {
      title: "Kasko Teklifleri",
      kpis: [
        { l: "Gelen Teklif", v: "14", d: "+14" },
        { l: "En Düşük Prim", v: "₺18.420", d: "" },
        { l: "Süre", v: "41 sn", d: "" },
      ],
      bars: [80, 74, 70, 66, 63, 58, 55, 52],
      rows: [
        { t: "Sigorta Şirketi A", m: "Tam kasko · ₺18.420", s: "En Uygun", c: "ok" },
        { t: "Sigorta Şirketi B", m: "Tam kasko · ₺19.150", s: "Önerilen", c: "info" },
        { t: "Sigorta Şirketi C", m: "Dar kasko · ₺16.900", s: "Kısıtlı", c: "warn" },
      ],
    },
  },

  /* ---------------------------------------------------------- ÜRÜN PORTALI */
  {
    slug: "urun",
    name: "{{brand}} Ürün Portalı",
    short: "Ürün Portalı",
    category: "Ürün ve Hizmet Yönetimi",
    group: "operasyon",
    icon: "box",
    color: "#0ea5e9",
    summary: "Ürün, hizmet, fiyat listesi ve stok bilgilerinizi merkezi bir katalogda yönetin.",
    hero: {
      title: "Tüm ürün ve hizmetleriniz",
      highlight: "tek bir katalogda.",
      text: "Ürün kartları, varyantlar, fiyat listeleri ve stok seviyeleri {{brand}} Ürün Portalı'nda merkezi olarak yönetilir; CRM, teklif ve faturada her zaman güncel bilgi kullanılır.",
    },
    stats: [
      { value: "Tek", label: "doğruluk kaynağı (single source of truth)" },
      { value: "%60", label: "daha hızlı ürün yayınlama" },
      { value: "∞", label: "varyant ve fiyat listesi" },
    ],
    features: [
      { icon: "box", title: "Ürün & Hizmet Kartları", text: "Görseller, teknik özellikler, birimler ve barkodlarla zengin ürün kartları." },
      { icon: "layers", title: "Varyant Yönetimi", text: "Renk, beden, kapasite gibi seçenekleri tek ürün altında yönetin." },
      { icon: "tag", title: "Fiyat Listeleri", text: "Bayi, kurumsal ve kampanya fiyatlarını döviz ve iskonto kurallarıyla tanımlayın." },
      { icon: "database", title: "Stok Takibi", text: "Depo bazlı stok, kritik seviye uyarısı ve otomatik stok güncellemesi." },
      { icon: "globe", title: "Müşteri Kataloğu", text: "Bayilerinize ve müşterilerinize özel, yetkili online ürün kataloğu yayınlayın." },
      { icon: "upload", title: "Toplu İçe Aktarım", text: "Excel veya XML ile binlerce ürünü dakikalar içinde yükleyin ve güncelleyin." },
    ],
    sections: [
      {
        eyebrow: "Merkezi katalog",
        title: "Bir kez güncelleyin, her yerde doğru görünsün",
        text: "Fiyat veya ürün bilgisinde yaptığınız değişiklik; tekliflere, faturalara, CRM fırsatlarına ve bayi kataloğuna anında yansır.",
        bullets: ["Suite genelinde otomatik senkronizasyon", "Değişiklik geçmişi ve versiyonlama", "Rol bazlı düzenleme yetkileri"],
        mock: "list",
      },
      {
        eyebrow: "Stok",
        title: "Kritik stok seviyelerini önceden görün",
        text: "Satış hızına göre stok tükenme tahmini yapın, kritik seviyeye düşen ürünler için otomatik bildirim alın.",
        bullets: ["Depo bazlı stok görünümü", "Kritik seviye bildirimleri", "Satış hızı analizleri"],
        mock: "chart",
      },
    ],
    steps: [
      { title: "Ürünleri yükleyin", text: "Mevcut ürün listenizi Excel şablonuyla içe aktarın." },
      { title: "Fiyatları tanımlayın", text: "Müşteri gruplarına özel fiyat listeleri ve iskontolar oluşturun." },
      { title: "Yayınlayın", text: "Katalog tüm {{brand}} uygulamalarında ve bayi portalında kullanıma hazır." },
    ],
    related: ["crm", "fatura", "teklif"],
    pricing: [
      { price: "690", unit: "₺ / ay", features: ["1.000 ürün", "Tek depo", "Temel fiyat listesi", "Excel içe aktarım"] },
      { price: "1.490", unit: "₺ / ay", features: ["Sınırsız ürün", "Çoklu depo", "Varyant & fiyat listeleri", "Bayi kataloğu"] },
      { features: ["Profesyonel paketteki her şey", "ERP / e-ticaret entegrasyonları", "Özel alanlar & API", "Öncelikli destek"] },
    ],
    testimonial: { quote: "Fiyat listesini tek yerden güncellemek, satış ekibinin yanlış fiyatla teklif vermesini tamamen bitirdi.", name: "Can D.", role: "Satış Operasyon Müdürü, Toptan Ticaret" },
    faq: [
      { q: "E-ticaret sitemle entegre olur mu?", a: "Yaygın e-ticaret altyapıları ve pazaryerleriyle API üzerinden entegre çalışabilir." },
      { q: "Barkod desteği var mı?", a: "Evet, ürün ve varyant bazında barkod tanımlayabilir, barkod okuyucuyla işlem yapabilirsiniz." },
      { q: "Dövizli fiyat tanımlayabilir miyim?", a: "Ürünlere farklı para birimlerinde fiyat verebilir, güncel kurla otomatik dönüşüm yapabilirsiniz." },
      { q: "Hizmet ürünleri için de uygun mu?", a: "Evet, stok takibi gerektirmeyen hizmet kalemleri ve abonelikler için de kullanılabilir." },
    ],
    mock: {
      title: "Ürün Kataloğu",
      kpis: [
        { l: "Aktif Ürün", v: "3.482", d: "+48" },
        { l: "Kritik Stok", v: "17", d: "-5" },
        { l: "Fiyat Listesi", v: "6", d: "" },
      ],
      bars: [30, 45, 40, 52, 60, 58, 68, 72],
      rows: [
        { t: "Endüstriyel Sensör X200", m: "SKU-4821 · 142 adet", s: "Stokta", c: "ok" },
        { t: "Kontrol Paneli Pro", m: "SKU-1290 · 8 adet", s: "Kritik", c: "warn" },
        { t: "Yıllık Bakım Hizmeti", m: "Hizmet · Abonelik", s: "Aktif", c: "info" },
      ],
    },
  },

  /* ---------------------------------------------------------- SUPPORT */
  {
    slug: "destek",
    name: "{{brand}} Support",
    short: "Support",
    category: "Destek ve Talep Yönetimi",
    group: "musteri",
    icon: "headset",
    color: "#7c3aed",
    summary: "Müşteri taleplerini e-posta, portal ve telefondan toplayın; SLA ile zamanında çözün.",
    hero: {
      title: "Müşteri talepleriniz",
      highlight: "hiçbir zaman kaybolmasın.",
      text: "E-posta, web formu, müşteri portalı ve telefondan gelen tüm talepleri tek bir gelen kutusunda toplayın. SLA kuralları, otomatik atama ve bilgi bankası ile destek ekibinizi hızlandırın.",
    },
    stats: [
      { value: "%45", label: "daha hızlı ilk yanıt süresi" },
      { value: "%98", label: "SLA uyum oranı" },
      { value: "4.8/5", label: "ortalama müşteri memnuniyeti" },
    ],
    features: [
      { icon: "inbox", title: "Çok Kanallı Gelen Kutusu", text: "E-posta, portal, form ve telefon kayıtları tek listede." },
      { icon: "clock", title: "SLA Yönetimi", text: "Öncelik ve müşteri sözleşmesine göre yanıt/çözüm süreleri ve eskalasyon." },
      { icon: "refresh", title: "Otomatik Atama", text: "Konu, ürün veya yük dengesine göre talepleri doğru ekibe yönlendirin." },
      { icon: "fileText", title: "Bilgi Bankası", text: "Sık sorulan sorular ve çözüm makaleleriyle müşterilerinize self-servis sunun." },
      { icon: "globe", title: "Müşteri Portalı", text: "Müşterileriniz taleplerini açsın, durumlarını takip etsin, yanıt versin." },
      { icon: "star", title: "Memnuniyet Anketi", text: "Kapanan her talepten sonra otomatik CSAT anketi ile geri bildirim toplayın." },
    ],
    sections: [
      {
        eyebrow: "Tek gelen kutusu",
        title: "Tüm kanallar, tek ekran, tek geçmiş",
        text: "Müşterinin geçmiş talepleri, CRM kaydı, satın aldığı ürünler ve faturaları talep ekranında yanınızda. Bağlam aramak yerine sorunu çözmeye odaklanın.",
        bullets: ["CRM ve fatura bilgisi talep içinde", "Hazır yanıt şablonları", "İç notlar ve ekip içi etiketleme"],
        mock: "list",
      },
      {
        eyebrow: "Performans",
        title: "Destek ekibinizin performansını anlık izleyin",
        text: "Açık talepler, SLA ihlal riski, temsilci bazlı çözüm süreleri ve memnuniyet skorlarını canlı panolarda takip edin.",
        bullets: ["Canlı SLA panosu", "Temsilci performans raporları", "Kategori bazlı trend analizi"],
        mock: "chart",
      },
    ],
    steps: [
      { title: "Kanalları bağlayın", text: "Destek e-posta adresinizi ve web formunuzu birkaç tıkla bağlayın." },
      { title: "Kuralları kurun", text: "SLA, öncelik ve otomatik atama kurallarınızı tanımlayın." },
      { title: "Portalı yayınlayın", text: "Markanıza özel müşteri portalınızı ve bilgi bankanızı açın." },
    ],
    related: ["crm", "surec", "dokuman"],
    pricing: [
      { price: "290", unit: "₺ / temsilci / ay", features: ["E-posta & form kanalı", "Temel SLA", "Hazır yanıtlar", "Müşteri portalı"] },
      { price: "490", unit: "₺ / temsilci / ay", features: ["Tüm kanallar", "Gelişmiş SLA & eskalasyon", "Bilgi bankası", "CSAT anketleri"] },
      { features: ["Profesyonel paketteki her şey", "Çoklu marka / portal", "Özel raporlar & API", "Atanmış müşteri yöneticisi"] },
    ],
    testimonial: { quote: "SLA ihlallerimiz neredeyse sıfıra indi. Müşteriler talebinin nerede olduğunu portaldan görebildiği için telefon trafiğimiz yarıya düştü.", name: "Burak Ö.", role: "Müşteri Hizmetleri Lideri, Yazılım" },
    faq: [
      { q: "Telefon santralimizle entegre olur mu?", a: "Bulut santral çözümleriyle entegre olarak gelen aramalardan otomatik talep oluşturabilir, çağrı kaydını talebe ekleyebilir." },
      { q: "Müşteri portalını kendi alan adımızda kullanabilir miyiz?", a: "Evet, destek.firmaniz.com gibi kendi alan adınızı ve logonuzu kullanabilirsiniz." },
      { q: "Kaç temsilci ile başlayabilirim?", a: "Tek temsilciyle başlayıp ihtiyacınıza göre istediğiniz zaman lisans ekleyebilirsiniz." },
      { q: "Yapay zekâ desteği var mı?", a: "Talep özetleme, kategori önerisi ve yanıt taslağı oluşturma gibi yapay zekâ özellikleri Profesyonel pakette yer alır." },
    ],
    mock: {
      title: "Destek Talepleri",
      kpis: [
        { l: "Açık Talep", v: "36", d: "-8" },
        { l: "İlk Yanıt", v: "12 dk", d: "-4" },
        { l: "CSAT", v: "4,8", d: "+0,2" },
      ],
      bars: [60, 52, 58, 45, 40, 38, 34, 30],
      rows: [
        { t: "#4821 Fatura görüntülenmiyor", m: "Yüksek · 2 saat kaldı", s: "Açık", c: "warn" },
        { t: "#4819 Kullanıcı yetkisi", m: "Normal · Atandı: Selin", s: "İşlemde", c: "info" },
        { t: "#4815 Entegrasyon sorusu", m: "Düşük · Çözüldü", s: "Kapandı", c: "ok" },
      ],
    },
  },

  /* ---------------------------------------------------------- BPMN / SÜREÇ */
  {
    slug: "surec",
    name: "{{brand}} Flow",
    short: "Flow",
    category: "BPMN / Süreç Tasarımı ve Otomasyon",
    group: "operasyon",
    icon: "workflow",
    color: "#4f46e5",
    summary: "İş süreçlerinizi BPMN 2.0 ile sürükle-bırak tasarlayın, onay akışlarını otomatikleştirin.",
    hero: {
      title: "Süreçlerinizi çizin,",
      highlight: "gerisini {{brand}} yapsın.",
      text: "BPMN 2.0 uyumlu görsel tasarımcıyla satın alma, onay, işe alım veya müşteri süreçlerinizi kod yazmadan modelleyin. Formlar, kurallar ve entegrasyonlarla süreçleriniz uçtan uca otomatik çalışsın.",
    },
    stats: [
      { value: "Kodsuz", label: "sürükle-bırak süreç tasarımı" },
      { value: "%50", label: "daha kısa süreç döngü süresi" },
      { value: "BPMN 2.0", label: "standart uyumlu modelleme" },
    ],
    features: [
      { icon: "workflow", title: "Görsel Süreç Tasarımcı", text: "Görev, karar, paralel akış ve zamanlayıcıları sürükle-bırak ile modelleyin." },
      { icon: "listChecks", title: "Dinamik Formlar", text: "Süreç adımlarına özel, koşullu alanlara sahip formlar oluşturun." },
      { icon: "gitBranch", title: "Kural Motoru", text: "Tutar, departman veya rol bazlı karar tablolarıyla akışı yönlendirin." },
      { icon: "plug", title: "Entegrasyonlar", text: "{{brand}} uygulamaları, REST API ve webhook'larla sistemler arası otomasyon." },
      { icon: "clock", title: "SLA & Zamanlayıcı", text: "Geciken adımlarda hatırlatma, eskalasyon ve otomatik yönlendirme." },
      { icon: "chart", title: "Süreç Analitiği", text: "Darboğazları, ortalama adım sürelerini ve iş yükünü görselleştirin." },
    ],
    sections: [
      {
        eyebrow: "Tasarım",
        title: "İş birimleri süreçlerini kendileri modellesin",
        text: "BT ekibine bağımlı kalmadan iş analistleri ve süreç sahipleri akışları tasarlar, test eder ve yayına alır. Her versiyon kayıt altındadır.",
        bullets: ["Versiyonlama ve geri alma", "Test modu ile canlıya almadan deneme", "Hazır süreç şablonları kütüphanesi"],
        mock: "flow",
      },
      {
        eyebrow: "Analitik",
        title: "Darboğazları verilerle bulun",
        text: "Hangi adımın en çok beklediğini, hangi ekibin yük altında olduğunu ve süreçlerin ortalama tamamlanma süresini canlı izleyin.",
        bullets: ["Isı haritası ile süreç analizi", "Adım bazlı süre metrikleri", "Otomatik iyileştirme önerileri"],
        mock: "chart",
      },
    ],
    steps: [
      { title: "Modelleyin", text: "Sürecinizi şablondan başlatın veya boş tuvalde çizin." },
      { title: "Formları bağlayın", text: "Her adıma form, kural ve sorumlu atayın." },
      { title: "Yayına alın", text: "Süreci yayınlayın, çalışanlarınız görevlerini kendi kutularında görsün." },
    ],
    related: ["hr", "dokuman", "destek"],
    pricing: [
      { price: "990", unit: "₺ / ay", features: ["5 aktif süreç", "25 kullanıcı", "Görsel tasarımcı", "Dinamik formlar"] },
      { price: "2.490", unit: "₺ / ay", features: ["Sınırsız süreç", "100 kullanıcı", "Kural motoru & SLA", "REST & webhook entegrasyonları"] },
      { features: ["Profesyonel paketteki her şey", "Süreç analitiği & madencilik", "On-premise kurulum seçeneği", "Özel SLA"] },
    ],
    testimonial: { quote: "Satın alma onay sürecimiz 9 günden 2 güne indi. En güzeli, süreçte değişiklik gerektiğinde BT'yi beklemiyoruz.", name: "Deniz A.", role: "Süreç Geliştirme Uzmanı, Üretim" },
    faq: [
      { q: "BPMN dosyalarımızı içe aktarabilir miyiz?", a: "Evet, BPMN 2.0 standardındaki .bpmn dosyalarını içe ve dışa aktarabilirsiniz." },
      { q: "Kod bilgisi gerekiyor mu?", a: "Hayır. Gelişmiş senaryolar için isteğe bağlı script desteği bulunsa da süreçlerin büyük çoğunluğu kodsuz tasarlanır." },
      { q: "Diğer sistemlerimizi tetikleyebilir mi?", a: "REST API çağrıları, webhook'lar ve hazır {{brand}} bağlayıcıları ile harici sistemleri tetikleyebilirsiniz." },
      { q: "Mobil onay yapılabilir mi?", a: "Evet, yöneticiler bekleyen görevlerini mobil uygulamadan inceleyip onaylayabilir." },
    ],
    mock: {
      title: "Satın Alma Süreci",
      kpis: [
        { l: "Aktif Süreç", v: "128", d: "+12" },
        { l: "Ort. Süre", v: "1,8 gün", d: "-0,6" },
        { l: "Geciken", v: "4", d: "-2" },
      ],
      bars: [70, 62, 58, 50, 46, 40, 38, 32],
      rows: [
        { t: "Talep Oluşturuldu", m: "Satın alma formu", s: "Tamam", c: "ok" },
        { t: "Bütçe Kontrolü", m: "Kural: Tutar > ₺50.000", s: "Tamam", c: "ok" },
        { t: "Genel Müdür Onayı", m: "Atanan: GM · 4 saat", s: "Bekliyor", c: "warn" },
      ],
    },
  },

  /* ---------------------------------------------------------- DOKÜMAN */
  {
    slug: "dokuman",
    name: "{{brand}} Docs",
    short: "Docs",
    category: "Doküman Yönetimi",
    group: "operasyon",
    icon: "fileText",
    color: "#0d9488",
    summary: "Dosya, sözleşme ve arşivinizi versiyonlu, yetkili ve aranabilir şekilde saklayın.",
    hero: {
      title: "Dosyalarınız, sözleşmeleriniz ve arşiviniz",
      highlight: "güvende ve bir aramada.",
      text: "Tüm şirket dokümanlarınızı klasör yapısı, etiketler ve yetkilerle düzenleyin. Sözleşmelerin bitiş tarihlerini takip edin, e-imza ile onaylayın, tam metin arama ile saniyeler içinde bulun.",
    },
    stats: [
      { value: "Saniyeler", label: "içinde tam metin arama" },
      { value: "%80", label: "daha az kâğıt kullanımı" },
      { value: "256-bit", label: "şifreleme ile güvenli arşiv" },
    ],
    features: [
      { icon: "folder", title: "Akıllı Klasörler", text: "Departman, proje veya müşteri bazlı klasörler ve etiketlerle düzen." },
      { icon: "refresh", title: "Versiyon Kontrolü", text: "Her değişiklik kayıt altında; eski versiyonları karşılaştırın ve geri alın." },
      { icon: "pen", title: "E-İmza & Onay", text: "Sözleşmeleri e-imza ile imzalayın, onay akışlarıyla doğru kişiye iletin." },
      { icon: "calendar", title: "Sözleşme Takibi", text: "Bitiş ve yenileme tarihlerinde otomatik hatırlatma alın." },
      { icon: "search", title: "Tam Metin Arama (OCR)", text: "Taranmış belgeler dahil tüm içeriklerde anında arama yapın." },
      { icon: "lock", title: "Yetki & Denetim", text: "Klasör ve dosya bazlı yetkiler, kim ne zaman açtı loglarıyla tam denetim." },
    ],
    sections: [
      {
        eyebrow: "Sözleşme yönetimi",
        title: "Sözleşmelerinizin yaşam döngüsünü baştan sona yönetin",
        text: "Şablondan sözleşme oluşturun, iç onaydan geçirin, e-imzaya gönderin ve bitiş tarihine kadar takip edin. Yenileme zamanı geldiğinde {{brand}} size hatırlatsın.",
        bullets: ["Sözleşme şablonları", "Onay + e-imza akışı", "Yenileme hatırlatmaları"],
        mock: "list",
      },
      {
        eyebrow: "Arşiv",
        title: "Fiziksel arşivi dijitale taşıyın",
        text: "Taranan belgeler OCR ile metne dönüştürülür, otomatik sınıflandırılır ve saklama süresi kurallarına göre arşivlenir.",
        bullets: ["OCR ve otomatik sınıflandırma", "Saklama süresi politikaları", "KVKK uyumlu imha süreçleri"],
        mock: "chart",
      },
    ],
    steps: [
      { title: "Yapıyı kurun", text: "Klasör şablonları ve yetki gruplarınızı oluşturun." },
      { title: "Belgeleri yükleyin", text: "Sürükle-bırak veya toplu yükleme ile dosyalarınızı taşıyın." },
      { title: "Paylaşın", text: "Ekip içi ve dış paydaşlarla güvenli bağlantılarla paylaşın." },
    ],
    related: ["surec", "hr", "teklif"],
    pricing: [
      { price: "490", unit: "₺ / ay", features: ["100 GB depolama", "10 kullanıcı", "Versiyon kontrolü", "Klasör yetkileri"] },
      { price: "1.290", unit: "₺ / ay", features: ["1 TB depolama", "50 kullanıcı", "OCR & tam metin arama", "Sözleşme takibi"] },
      { features: ["Sınırsız depolama", "E-imza entegrasyonu", "Saklama politikaları", "On-premise seçeneği"] },
    ],
    testimonial: { quote: "Sözleşmelerin yenileme tarihlerini kaçırmak tarihe karıştı. Denetimlerde istenen belgeyi saniyeler içinde bulabiliyoruz.", name: "Selin Y.", role: "Hukuk Müşaviri, Lojistik" },
    faq: [
      { q: "Hangi dosya türlerini destekliyor?", a: "PDF, Office dosyaları, görseller, CAD çizimleri dahil tüm dosya türlerini saklayabilir; yaygın formatları tarayıcıda önizleyebilirsiniz." },
      { q: "E-imza için ek bir şey gerekiyor mu?", a: "Nitelikli elektronik sertifikanız ile doğrudan imzalayabilir veya entegre e-imza sağlayıcılarını kullanabilirsiniz." },
      { q: "Veriler nerede saklanıyor?", a: "Türkiye'de bulunan ISO 27001 sertifikalı veri merkezlerinde, şifreli olarak saklanır." },
      { q: "Masaüstü senkronizasyonu var mı?", a: "Windows ve macOS için senkronizasyon istemcisi ile klasörlerinizi bilgisayarınızla eşitleyebilirsiniz." },
    ],
    mock: {
      title: "Dokümanlar",
      kpis: [
        { l: "Toplam Belge", v: "18.240", d: "+312" },
        { l: "Yenilenecek", v: "9", d: "" },
        { l: "Depolama", v: "%42", d: "" },
      ],
      bars: [35, 42, 48, 50, 57, 63, 68, 76],
      rows: [
        { t: "Tedarik Sözleşmesi 2026.pdf", m: "v4 · Hukuk", s: "İmzalandı", c: "ok" },
        { t: "Kira Sözleşmesi — Depo", m: "Bitiş: 30 gün", s: "Yenilenecek", c: "warn" },
        { t: "Gizlilik Anlaşması.docx", m: "v2 · İnceleme", s: "Onayda", c: "info" },
      ],
    },
  },

  /* ---------------------------------------------------------- CARİ / MUTABAKAT */
  {
    slug: "cari",
    name: "{{brand}} Cari",
    short: "Cari",
    category: "Cari Yönetimi ve Mutabakat",
    group: "finans",
    icon: "handshake",
    color: "#c026d3",
    summary: "Cari hesapları takip edin, BA/BS ve cari mutabakatlarını dijital olarak tamamlayın.",
    hero: {
      title: "Cari mutabakatlar artık",
      highlight: "günler değil dakikalar sürüyor.",
      text: "Müşteri ve tedarikçi carilerinizi tek ekranda izleyin; cari ve BA/BS mutabakat mektuplarını toplu gönderin, karşı taraf tek tıkla onaylasın ya da itiraz etsin. Tüm süreç kayıt altında.",
    },
    stats: [
      { value: "%90", label: "mutabakat sürecinde zaman tasarrufu" },
      { value: "Tek tık", label: "ile karşı taraf onayı" },
      { value: "Anlık", label: "cari bakiye ve yaşlandırma" },
    ],
    features: [
      { icon: "handshake", title: "Cari Hesap Takibi", text: "Bakiye, vade, risk limiti ve hareket geçmişi tek kartta." },
      { icon: "send", title: "Toplu Mutabakat", text: "Yüzlerce firmaya cari ve BA/BS mutabakat mektubunu tek seferde gönderin." },
      { icon: "check", title: "Online Onay / İtiraz", text: "Karşı taraf linke tıklayıp onaylar veya ekstre ile itiraz eder." },
      { icon: "clock", title: "Yaşlandırma Analizi", text: "Vadesi geçen alacakları gün aralıklarına göre analiz edin." },
      { icon: "bell", title: "Tahsilat Hatırlatma", text: "Vadesi yaklaşan ve geçen alacaklar için otomatik hatırlatma e-postaları." },
      { icon: "fileText", title: "Ekstre & Raporlar", text: "Dönemsel cari ekstreleri PDF/Excel olarak anında oluşturun." },
    ],
    sections: [
      {
        eyebrow: "Mutabakat",
        title: "Mutabakat sürecini e-posta ve telefon trafiğinden kurtarın",
        text: "Mektuplar otomatik hazırlanır ve gönderilir; kim açtı, kim onayladı, kim itiraz etti anlık izlenir. Yanıt vermeyenlere otomatik hatırlatma gider.",
        bullets: ["Cari ve BA/BS mutabakatı", "Okundu / onay / itiraz takibi", "Otomatik hatırlatma döngüleri"],
        mock: "list",
      },
      {
        eyebrow: "Risk",
        title: "Alacak riskinizi önceden görün",
        text: "Müşteri bazlı risk limitleri, gecikme eğilimleri ve yaşlandırma raporlarıyla nakit akışınızı koruyun.",
        bullets: ["Risk limiti uyarıları", "Yaşlandırma raporları", "Tahsilat tahminleri"],
        mock: "chart",
      },
    ],
    steps: [
      { title: "Carileri aktarın", text: "Muhasebe programınızdan cari listesini ve bakiyeleri içe aktarın." },
      { title: "Dönemi seçin", text: "Mutabakat dönemini ve gönderilecek firmaları belirleyin." },
      { title: "Gönderin, izleyin", text: "Mektupları gönderin, yanıtları canlı panodan takip edin." },
    ],
    related: ["muhasebe", "fatura", "crm"],
    pricing: [
      { price: "590", unit: "₺ / ay", features: ["500 cari", "Cari mutabakat", "Online onay/itiraz", "Ekstre raporları"] },
      { price: "1.190", unit: "₺ / ay", features: ["Sınırsız cari", "BA/BS mutabakatı", "Yaşlandırma & risk", "Tahsilat hatırlatma"] },
      { features: ["Profesyonel paketteki her şey", "ERP entegrasyonları", "Çoklu şirket", "Özel raporlar & API"] },
    ],
    testimonial: { quote: "Yıl sonu mutabakatı için 3 kişi 2 hafta uğraşıyordu. Şimdi bir öğleden sonra gönderiyoruz, yanıtlar kendiliğinden toplanıyor.", name: "Hakan B.", role: "Finans Müdürü, Dağıtım" },
    faq: [
      { q: "Hangi muhasebe programlarıyla çalışır?", a: "{{brand}} Muhasebe ile yerleşik çalışır; yaygın muhasebe ve ERP yazılımlarından Excel veya entegrasyon ile veri alabilir." },
      { q: "Karşı tarafın üye olması gerekiyor mu?", a: "Hayır. Karşı taraf e-postadaki güvenli bağlantı ile üyelik olmadan onay veya itiraz verebilir." },
      { q: "BA/BS formlarıyla uyumlu mu?", a: "Evet, BA/BS mutabakat mektupları mevzuata uygun formatta oluşturulur." },
      { q: "Mutabakat geçmişi saklanıyor mu?", a: "Tüm gönderim, okunma ve yanıt kayıtları zaman damgasıyla arşivlenir." },
    ],
    mock: {
      title: "Mutabakat Dönemi — Eylül",
      kpis: [
        { l: "Gönderilen", v: "412", d: "" },
        { l: "Onaylanan", v: "%86", d: "+12" },
        { l: "İtiraz", v: "7", d: "" },
      ],
      bars: [20, 38, 52, 64, 72, 79, 84, 86],
      rows: [
        { t: "Yıldız Ambalaj Ltd.", m: "Bakiye: ₺84.120", s: "Onaylandı", c: "ok" },
        { t: "Kuzey Metal San.", m: "Bakiye: ₺12.400", s: "İtiraz", c: "warn" },
        { t: "Deniz Gıda A.Ş.", m: "Bakiye: ₺230.900", s: "Okundu", c: "info" },
      ],
    },
  },

  /* ---------------------------------------------------------- MUHASEBE */
  {
    slug: "muhasebe",
    name: "{{brand}} Muhasebe",
    short: "Muhasebe",
    category: "Finans ve Muhasebe İşlemleri",
    group: "finans",
    icon: "calculator",
    color: "#d97706",
    summary: "Gelir-gider, kasa-banka, tahsilat ve finansal raporlarınızı kolayca yönetin.",
    hero: {
      title: "Ön muhasebeniz",
      highlight: "kendi kendine işlesin.",
      text: "Satış ve alış faturaları, kasa-banka hareketleri, çek-senet ve masraflarınızı tek yerde yönetin. Banka entegrasyonu ile hareketler otomatik eşleşsin, kârınızı ve nakit akışınızı anlık görün.",
    },
    stats: [
      { value: "%75", label: "daha az manuel veri girişi" },
      { value: "Anlık", label: "kâr-zarar ve nakit akışı" },
      { value: "1 tık", label: "ile mali müşavire veri aktarımı" },
    ],
    features: [
      { icon: "receipt", title: "Gelir & Gider Takibi", text: "Satış, alış ve masraf kayıtlarınızı kategori bazlı yönetin." },
      { icon: "building", title: "Banka Entegrasyonu", text: "Banka hareketleri otomatik gelsin, faturalarla akıllı eşleşsin." },
      { icon: "wallet", title: "Kasa & Çek-Senet", text: "Kasa hareketleri, çek ve senet portföyünüzü vadeleriyle takip edin." },
      { icon: "trending", title: "Nakit Akışı", text: "Gelecek tahsilat ve ödemelerle nakit tahmininizi görün." },
      { icon: "chart", title: "Finansal Raporlar", text: "Kâr-zarar, gelir-gider ve KDV raporları tek tıkla hazır." },
      { icon: "users", title: "Mali Müşavir Erişimi", text: "Mali müşavirinize yetkili erişim verin, verileri dışa aktarın." },
    ],
    sections: [
      {
        eyebrow: "Banka",
        title: "Banka hareketleriniz kendiliğinden eşleşsin",
        text: "Anlaşmalı bankalardan gelen hareketler yapay zekâ destekli kurallarla ilgili fatura ve cari ile eşleştirilir. Siz sadece onaylayın.",
        bullets: ["Otomatik hareket çekme", "Akıllı eşleştirme kuralları", "Çoklu banka ve döviz hesapları"],
        mock: "list",
      },
      {
        eyebrow: "Raporlar",
        title: "İşletmenizin finansal sağlığını tek bakışta görün",
        text: "Gelir-gider dengesi, tahsilat performansı, en kârlı müşteriler ve ürünler hazır panolarda.",
        bullets: ["Kâr-zarar ve nakit akışı panosu", "Dönem karşılaştırmaları", "Excel & PDF dışa aktarım"],
        mock: "chart",
      },
    ],
    steps: [
      { title: "Hesabınızı açın", text: "Firma bilgilerinizi girin, açılış bakiyelerinizi tanımlayın." },
      { title: "Bankaları bağlayın", text: "Banka hesaplarınızı güvenli entegrasyonla bağlayın." },
      { title: "Takip edin", text: "Faturalarınızı kesin, tahsilatlarınızı ve kârınızı izleyin." },
    ],
    related: ["fatura", "cari", "hr"],
    pricing: [
      { price: "349", unit: "₺ / ay", features: ["1 kullanıcı", "Gelir-gider takibi", "Kasa & banka", "Temel raporlar"] },
      { price: "649", unit: "₺ / ay", features: ["5 kullanıcı", "Banka entegrasyonu", "Çek-senet & stok", "Nakit akışı raporları"] },
      { features: ["Sınırsız kullanıcı", "Çoklu şirket", "Gelişmiş yetkilendirme", "Özel entegrasyonlar"] },
    ],
    testimonial: { quote: "Ay sonunda mali müşavire klasör dolusu evrak götürmüyoruz. Her şey sistemde, kârımızı her sabah telefondan görüyorum.", name: "Gökhan E.", role: "Kurucu, Hizmet Sektörü" },
    faq: [
      { q: "Mali müşavirim sistemi kullanabilir mi?", a: "Evet, mali müşavirinize ücretsiz yetkili erişim tanımlayabilir, verileri yaygın muhasebe programlarının formatında dışa aktarabilirsiniz." },
      { q: "Hangi bankalarla entegre?", a: "Türkiye'deki yaygın bankaların büyük çoğunluğuyla entegre çalışır." },
      { q: "e-Fatura kesebilir miyim?", a: "{{brand}} e-Fatura ile birlikte kullanarak e-Fatura, e-Arşiv ve e-İrsaliye düzenleyebilirsiniz." },
      { q: "Mevcut programımdan veri aktarabilir miyim?", a: "Evet, cari, ürün ve açılış bakiyelerinizi Excel ile veya destek ekibimiz aracılığıyla aktarabilirsiniz." },
    ],
    mock: {
      title: "Finans Özeti",
      kpis: [
        { l: "Bu Ay Gelir", v: "₺1,24M", d: "+%18" },
        { l: "Gider", v: "₺684B", d: "+%4" },
        { l: "Net Kâr", v: "₺556B", d: "+%41" },
      ],
      bars: [48, 52, 46, 60, 64, 58, 72, 80],
      rows: [
        { t: "Banka Hesabı — Gelen EFT", m: "₺42.500 · Atlas Yapı", s: "Eşleşti", c: "ok" },
        { t: "Kira Ödemesi", m: "₺28.000 · Ekim", s: "Bekliyor", c: "warn" },
        { t: "Çek #00412", m: "₺15.000 · Vade 25.10", s: "Portföyde", c: "info" },
      ],
    },
  },

  /* ---------------------------------------------------------- CRM */
  {
    slug: "crm",
    name: "{{brand}} CRM",
    short: "CRM",
    category: "Müşteri İlişkileri Yönetimi",
    group: "musteri",
    icon: "userCog",
    color: "#ea580c",
    summary: "Potansiyel müşteriden satışa, satıştan sadakate tüm müşteri yolculuğunu yönetin.",
    hero: {
      title: "Müşterilerinizi tanıyın,",
      highlight: "satışlarınızı büyütün.",
      text: "Potansiyel müşteriler, fırsatlar, aktiviteler ve satış hunisi {{brand}} CRM'de. Teklif, fatura ve destek talepleri aynı müşteri kartında birleşsin; ekibiniz her görüşmeye hazırlıklı girsin.",
    },
    stats: [
      { value: "%32", label: "ortalama satış artışı" },
      { value: "360°", label: "müşteri görünümü" },
      { value: "%40", label: "daha az idari iş yükü" },
    ],
    features: [
      { icon: "users", title: "Kişi & Firma Yönetimi", text: "Tüm iletişim bilgileri, notlar ve geçmiş tek müşteri kartında." },
      { icon: "target", title: "Satış Hunisi", text: "Fırsatları aşamalar arasında sürükleyin, tahmini geliri anlık görün." },
      { icon: "calendar", title: "Aktivite & Görevler", text: "Görüşme, toplantı ve hatırlatmaları takvimle senkronize planlayın." },
      { icon: "mail", title: "E-posta Entegrasyonu", text: "Gmail ve Outlook yazışmaları otomatik olarak müşteri kartına düşsün." },
      { icon: "sparkles", title: "Yapay Zekâ Önerileri", text: "Kazanma olasılığı, sonraki en iyi adım ve otomatik görüşme özetleri." },
      { icon: "chart", title: "Satış Raporları", text: "Temsilci, ürün ve bölge bazlı performans ile hedef takibi." },
    ],
    sections: [
      {
        eyebrow: "Satış hunisi",
        title: "Satış sürecinizin her aşamasını görün",
        text: "Hangi fırsatın hangi aşamada beklediğini, kazanma olasılığını ve bu ay kapanması beklenen geliri tek ekranda takip edin.",
        bullets: ["Sürükle-bırak kanban görünümü", "Özelleştirilebilir aşamalar", "Gelir tahmini"],
        mock: "list",
      },
      {
        eyebrow: "360° müşteri",
        title: "Teklif, fatura ve destek bilgisi aynı kartta",
        text: "{{brand}} platformunun ortak veri modeli sayesinde müşterinin teklifleri, faturaları, açık destek talepleri ve sözleşmeleri CRM kartında görünür.",
        bullets: ["Suite genelinde ortak müşteri kaydı", "Zaman tüneli görünümü", "Müşteri sağlık skoru"],
        mock: "chart",
      },
    ],
    steps: [
      { title: "Kişileri aktarın", text: "Excel, e-posta veya kartvizit tarama ile müşterilerinizi yükleyin." },
      { title: "Huniyi kurun", text: "Satış aşamalarınızı ve ekip hedeflerinizi tanımlayın." },
      { title: "Satmaya başlayın", text: "Fırsatları takip edin, teklif oluşturun ve kapatın." },
    ],
    related: ["teklif", "destek", "fatura"],
    pricing: [
      { price: "249", unit: "₺ / kullanıcı / ay", features: ["Kişi & firma yönetimi", "Satış hunisi", "Görev & takvim", "Mobil uygulama"] },
      { price: "449", unit: "₺ / kullanıcı / ay", features: ["Başlangıç paketindeki her şey", "E-posta entegrasyonu", "Otomasyonlar", "Gelişmiş raporlar"] },
      { features: ["Profesyonel paketteki her şey", "Yapay zekâ önerileri", "Özel alanlar & API", "Atanmış müşteri yöneticisi"] },
    ],
    testimonial: { quote: "Satış ekibimizin pipeline'ı artık herkes için şeffaf. Haftalık toplantılarımız yarı yarıya kısaldı, kapanış oranımız yükseldi.", name: "Ayşe K.", role: "Satış Direktörü, B2B Hizmet" },
    faq: [
      { q: "Mevcut CRM'imden geçiş yapabilir miyim?", a: "Evet, yaygın CRM sistemlerinden kişi, firma ve fırsat verilerinizi aktarabilirsiniz; ekibimiz geçişte destek olur." },
      { q: "Mobil uygulama var mı?", a: "iOS ve Android uygulamaları ile sahadaki ekibiniz müşteri kartlarına ve görevlerine erişebilir." },
      { q: "Teklif oluşturabiliyor muyum?", a: "Evet, Ürün Portalı'ndaki güncel fiyatlarla fırsat üzerinden teklif oluşturup e-posta ile gönderebilirsiniz." },
      { q: "Otomasyon kurabilir miyim?", a: "Aşama değişikliklerinde görev oluşturma, e-posta gönderme gibi otomasyonları kodsuz kurabilirsiniz." },
    ],
    mock: {
      title: "Satış Hunisi",
      kpis: [
        { l: "Açık Fırsat", v: "₺4,8M", d: "+%22" },
        { l: "Kazanma Oranı", v: "%38", d: "+5" },
        { l: "Bu Ay Kapanan", v: "24", d: "+7" },
      ],
      bars: [40, 46, 52, 50, 61, 66, 72, 84],
      rows: [
        { t: "Atlas Yapı — ERP Dönüşümü", m: "₺480.000 · Teklif aşaması", s: "%70", c: "ok" },
        { t: "Mavi Lojistik — Yıllık Lisans", m: "₺120.000 · Görüşme", s: "%40", c: "info" },
        { t: "Kuzey Enerji — Pilot Proje", m: "₺65.000 · İlk temas", s: "%15", c: "warn" },
      ],
    },
  },

  /* ---------------------------------------------------------- FATURA / E-DÖNÜŞÜM */
  {
    slug: "fatura",
    name: "{{brand}} e-Fatura",
    short: "e-Fatura",
    category: "Fatura / e-Dönüşüm",
    group: "finans",
    icon: "fileCheck",
    color: "#dc2626",
    summary: "e-Fatura, e-Arşiv, e-İrsaliye ve e-SMM'yi tek ekrandan, mevzuata uygun düzenleyin.",
    hero: {
      title: "e-Dönüşüme geçiş",
      highlight: "hiç bu kadar kolay olmamıştı.",
      text: "e-Fatura, e-Arşiv Fatura, e-İrsaliye ve e-Serbest Meslek Makbuzu'nu tek ekrandan düzenleyin. Gelen faturalar otomatik içeri alınsın, muhasebe ve cari kayıtlarınız kendiliğinden oluşsun.",
    },
    stats: [
      { value: "4 adım", label: "da e-fatura düzenleme" },
      { value: "Aynı gün", label: "e-Fatura geçişi ve aktivasyon" },
      { value: "%100", label: "GİB mevzuatına uyum" },
    ],
    features: [
      { icon: "fileCheck", title: "e-Fatura & e-Arşiv", text: "Alıcının mükellefiyetine göre doğru belge türü otomatik seçilir." },
      { icon: "box", title: "e-İrsaliye", text: "Sevkiyatlarınız için e-İrsaliye düzenleyin, faturaya dönüştürün." },
      { icon: "fileText", title: "e-SMM", text: "Serbest meslek erbabı için e-Serbest Meslek Makbuzu düzenleme." },
      { icon: "inbox", title: "Gelen Fatura Kutusu", text: "Size kesilen faturalar otomatik gelir; kabul/ret ve gider kaydı tek tıkla." },
      { icon: "pen", title: "Özelleştirilebilir Tasarım", text: "Logonuz ve renklerinizle kurumsal fatura şablonları." },
      { icon: "lock", title: "Yasal Arşivleme", text: "Tüm belgeler yasal süre boyunca güvenle saklanır." },
    ],
    sections: [
      {
        eyebrow: "Hızlı düzenleme",
        title: "Faturanızı saniyeler içinde kesin ve gönderin",
        text: "Müşteri ve ürün bilgileri Ürün Portalı ve CRM'den otomatik gelir. Belge türünü seçmenize gerek yok; {{brand}} alıcıya göre doğru e-belgeyi oluşturur.",
        bullets: ["Otomatik mükellef sorgulama", "Toplu fatura oluşturma", "Tekrarlayan (abonelik) faturalar"],
        mock: "list",
      },
      {
        eyebrow: "Entegre muhasebe",
        title: "Kesilen her fatura muhasebeye ve cariye işlensin",
        text: "Düzenlediğiniz ve aldığınız faturalar {{brand}} Muhasebe ve {{brand}} Cari uygulamalarına otomatik kaydedilir; çift giriş derdi biter.",
        bullets: ["Otomatik gelir/gider kaydı", "Cari bakiye güncellemesi", "Tahsilat takibi"],
        mock: "chart",
      },
    ],
    steps: [
      { title: "Başvurunuzu yapın", text: "Mali mühür veya e-imza ile başvurunuzu online tamamlayın." },
      { title: "Aktive edin", text: "Ekibimiz aynı gün içinde e-Fatura hesabınızı aktifleştirsin." },
      { title: "Faturalamaya başlayın", text: "İlk e-faturanızı 4 adımda düzenleyin ve gönderin." },
    ],
    related: ["muhasebe", "cari", "urun"],
    pricing: [
      { price: "149", unit: "₺ / ay", features: ["Yıllık 500 kontör", "e-Fatura & e-Arşiv", "Gelen fatura kutusu", "Standart şablon"] },
      { price: "299", unit: "₺ / ay", features: ["Yıllık 2.000 kontör", "e-İrsaliye & e-SMM", "Özel fatura tasarımı", "Toplu & tekrarlayan fatura"] },
      { features: ["Sınırsız kontör seçenekleri", "Özel entegratör bağlantısı", "ERP entegrasyonu & API", "Öncelikli destek"] },
    ],
    testimonial: { quote: "e-Fatura'ya geçişi aynı gün tamamladık. Gelen faturalar otomatik gider olarak işlendiği için ay sonu kapanışı çok hızlandı.", name: "Serkan M.", role: "Muhasebe Sorumlusu, Üretim" },
    faq: [
      { q: "e-Fatura'ya geçmek zorunda mıyım?", a: "Belirli ciro sınırlarını aşan veya belirli sektörlerde faaliyet gösteren işletmeler için zorunludur. Ekibimiz durumunuzu ücretsiz değerlendirir." },
      { q: "Mali mühür gerekli mi?", a: "Tüzel kişiler için mali mühür, şahıs işletmeleri için e-imza ile başvuru yapılabilir." },
      { q: "Kontör nedir?", a: "Her gönderilen veya alınan e-belge bir kontör kullanır. Paketinize dahil kontörlerin yanında ek kontör alabilirsiniz." },
      { q: "Eski faturalarımı aktarabilir miyim?", a: "Evet, geçmiş e-Fatura ve e-Arşiv XML dosyalarınızı ZIP olarak yükleyip arşivinize ekleyebilirsiniz." },
    ],
    mock: {
      title: "e-Belgeler",
      kpis: [
        { l: "Bu Ay Kesilen", v: "312", d: "+%9" },
        { l: "Gelen Fatura", v: "148", d: "" },
        { l: "Kalan Kontör", v: "1.640", d: "" },
      ],
      bars: [50, 54, 60, 58, 66, 70, 74, 78],
      rows: [
        { t: "SNS2026000000412", m: "e-Fatura · ₺24.780", s: "Gönderildi", c: "ok" },
        { t: "ARS2026000001284", m: "e-Arşiv · ₺1.250", s: "Raporlandı", c: "info" },
        { t: "Gelen: Ofis Kırtasiye", m: "e-Fatura · ₺3.420", s: "Yanıt Bekliyor", c: "warn" },
      ],
    },
  },
];
