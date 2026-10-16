/*
 * Sayfa içerikleri. Her fonksiyon <main> içine yerleşecek HTML'i döndürür.
 * body[data-page] değeri hangi fonksiyonun çalışacağını belirler.
 */
(function () {
  const P = () => window.PRODUCTS;
  const G = () => window.PRODUCT_GROUPS;

  /* =========================================================
   *  ANA SAYFA
   * ======================================================= */
  const HUB_LEFT = ["hr", "destek", "dokuman", "muhasebe", "fatura"];
  const HUB_RIGHT = ["teklif", "urun", "surec", "cari", "crm"];

  // Hub kartlarında görselde olduğu gibi kısa başlık + açıklama
  const HUB_TEXT = {
    hr: ["HR", "İnsan Kaynakları"],
    teklif: ["Sigorta Hızlı Teklif", "Karşılaştırmalı teklifler"],
    urun: ["Ürün Portalı", "Ürün ve hizmet yönetimi"],
    destek: ["Support Portalı", "Destek ve talep yönetimi"],
    surec: ["BPMN / Süreç", "Tasarım ve otomasyon"],
    dokuman: ["Doküman Yönetimi", "Dosya, sözleşme, arşiv"],
    cari: ["Cari / Mutabakat", "Cari yönetimi ve mutabakat"],
    muhasebe: ["Muhasebe Portalı", "Finans ve muhasebe"],
    crm: ["CRM", "Müşteri ilişkileri"],
    fatura: ["Fatura / e-Dönüşüm", "e-Fatura, e-Arşiv, e-İrsaliye"],
  };
  const hubTitle = (p) => (HUB_TEXT[p.slug] || [p.short])[0];
  const hubSub = (p) => (HUB_TEXT[p.slug] || [, p.category])[1];

  function homeHero() {
    const { t, signupUrl, getProduct } = UI;
    const chip = (slug, side) => {
      const p = getProduct(slug);
      return `<a class="hub-chip ${side}" href="${UI.productUrl(slug)}" style="--pc:${p.color}">
        <span class="hub-ico">${icon(p.icon)}</span>
        <span class="hub-txt"><strong>${hubTitle(p)}</strong><small>${hubSub(p)}</small></span>
      </a>`;
    };
    return `
    <section class="home-hero">
      <div class="hero-grid-bg"></div>
      <div class="container hero-center">
        <span class="pill reveal">${icon("sparkles")} ${t("Yeni: {{brand}} Flow ile kodsuz süreç otomasyonu")}</span>
        <h1 class="reveal">İşinizin tüm uygulamaları<br><span class="grad-text">tek platformda.</span></h1>
        <p class="lead reveal">${t("İnsan kaynaklarından e-faturaya, CRM'den süreç otomasyonuna kadar 10 iş uygulaması {{brand}} {{suite}} içinde ortak veri ve tek oturumla birlikte çalışır. Bir kez girin, her yerde kullanın.")}</p>
        <div class="hero-actions reveal">
          <a class="btn btn-primary btn-lg" href="${signupUrl()}">Ücretsiz Deneyin ${icon("arrowRight")}</a>
          <a class="btn btn-ghost-light btn-lg" href="${UI.url("iletisim.html#demo")}">${icon("play")} Demo İzleyin</a>
        </div>
        <ul class="hero-checks reveal">
          <li>${icon("check")} Kredi kartı gerekmez</li>
          <li>${icon("check")} ${t("{{trialDays}} gün ücretsiz")}</li>
          <li>${icon("check")} Kurulum gerektirmez</li>
        </ul>
      </div>
      <div class="container">
        <div class="hub reveal" id="hub">
          <svg class="hub-lines" id="hubLines" aria-hidden="true"></svg>
          <div class="hub-col left">${HUB_LEFT.map((s) => chip(s, "left")).join("")}</div>
          <div class="hub-core" id="hubCore">
            <div class="core-db">${icon("database")}</div>
            <div class="core-disc">
              <div class="core-title">${t("{{suite}}").toUpperCase()}</div>
              <div class="core-sub">${t("{{tagline}}")}</div>
              <div class="core-icons">${["users", "database", "workflow", "fileText", "shieldCheck", "chart", "search"].map((i) => icon(i)).join("")}</div>
            </div>
            <div class="core-ring"></div>
          </div>
          <div class="hub-col right">${HUB_RIGHT.map((s) => chip(s, "right")).join("")}</div>
        </div>
      </div>
    </section>`;
  }

  function promoSlider() {
    const { t, productUrl, url } = UI;
    const slides = [
      { color: "#dc2626", icon: "fileCheck", title: "e-Dönüşüme aynı gün geçin!", text: "Başvurudan aktivasyona kadar uzman ekibimiz yanınızda. İlk e-faturanızı 4 adımda düzenleyin.", href: productUrl("fatura") },
      { color: "#0d9488", icon: "upload", title: "Verileriniz aynı gün içinde aktarılsın!", text: "Mevcut programınızdaki cari, ürün ve belgelerinizi kendiniz aktarın ya da ekibimize bırakın.", href: url("iletisim.html#demo") },
      { color: "#16a34a", icon: "shieldCheck", title: "Sigorta acenteleri için Hızlı Teklif yayında!", text: "Tüm sigorta şirketlerinden tek ekranda karşılaştırmalı teklif alın.", href: productUrl("teklif") },
      { color: "#4f46e5", icon: "workflow", title: "Süreçlerinizi kodsuz otomatikleştirin!", text: t("{{brand}} Flow ile BPMN 2.0 uyumlu onay akışlarını sürükle-bırak tasarlayın."), href: productUrl("surec") },
      { color: "#ea580c", icon: "sparkles", title: "CRM'de yapay zekâ önerileri!", text: "Kazanma olasılığı ve sonraki en iyi adım önerileriyle satışlarınızı hızlandırın.", href: productUrl("crm") },
    ];
    return `
    <section class="promo">
      <div class="container">
        <div class="slider" data-slider data-per="2">
          <div class="slider-viewport"><div class="slider-track">
            ${slides
              .map(
                (s) => `<a class="promo-card" href="${s.href}" style="--pc:${s.color}">
                  <div class="promo-txt"><h3>${s.title}</h3><p>${s.text}</p><span class="promo-link">Detaylı Bilgi ${icon("arrowRight")}</span></div>
                  <div class="promo-art">${icon(s.icon)}</div>
                </a>`
              )
              .join("")}
          </div></div>
          <div class="slider-nav">
            <button class="slider-prev" aria-label="Önceki">${icon("chevronLeft")}</button>
            <div class="slider-dots"></div>
            <button class="slider-next" aria-label="Sonraki">${icon("chevronRight")}</button>
          </div>
        </div>
      </div>
    </section>`;
  }

  function trustStrip() {
    const { t } = UI;
    const stars = Array.from({ length: 5 }, () => icon("star", "fill")).join("");
    return `
    <section class="trust">
      <div class="container trust-inner reveal">
        <div class="trust-rating">
          <div class="rating-big">4,8<small>/5</small></div>
          <div><div class="stars">${stars}</div><span>Kullanıcı değerlendirmelerinde ortalama memnuniyet</span></div>
        </div>
        <div class="trust-text">
          <h2>${t("İşletmeler tüm operasyonlarını {{brand}} ile tek platformda yönetiyor")}</h2>
          <p>${t("Ayrı ayrı programlar, birbirini tutmayan Excel dosyaları ve tekrar tekrar girilen veriler yerine tek platform. Siz de {{brand}} {{suite}} kullanan işletmeler arasında yerinizi alın.")}</p>
        </div>
        <div class="trust-stats">
          <div><strong>10</strong><span>entegre uygulama</span></div>
          <div><strong>%99,9</strong><span>erişilebilirlik</span></div>
          <div><strong>ISO 27001</strong><span>bilgi güvenliği</span></div>
        </div>
      </div>
    </section>`;
  }

  function featureTabs() {
    const { t, sectionHead } = UI;
    const tabs = G()
      .map((g, i) => `<button class="ftab ${i === 0 ? "on" : ""}" data-group="${g.id}">${icon(g.icon)} ${g.name}</button>`)
      .join("");
    return `
    <section class="section" id="uygulamalar">
      <div class="container">
        ${sectionHead("Uygulamalar", "{{brand}} {{suite}} ile neler yapabilirsiniz?", "İşletmenizin finans, satış, operasyon ve insan kaynakları süreçlerini yönetmeniz için ihtiyaç duyduğunuz tüm uygulamalar tek çatı altında.")}
        <div class="ftabs reveal" role="tablist">${tabs}</div>
        <div class="fpanel reveal" id="fpanel"></div>
        <div class="product-grid">${P().map((p) => UI.productCard(p)).join("")}</div>
      </div>
    </section>`;
  }

  function renderFeaturePanel(groupId, activeSlug) {
    const { t, productUrl, mock } = UI;
    const list = P().filter((p) => p.group === groupId);
    const active = list.find((p) => p.slug === activeSlug) || list[0];
    const panel = document.getElementById("fpanel");
    panel.innerHTML = `
      <div class="fp-list">
        ${list
          .map(
            (p) => `<button class="fp-item ${p === active ? "on" : ""}" data-slug="${p.slug}" style="--pc:${p.color}">
              <span class="pc-ico">${icon(p.icon)}</span>
              <span><strong>${t(p.name)}</strong><small>${t(p.summary)}</small></span>
            </button>`
          )
          .join("")}
        <a class="btn btn-primary" href="${productUrl(active.slug)}">Detaylı İnceleyin ${icon("arrowRight")}</a>
      </div>
      <div class="fp-visual">
        ${mock(active, "dashboard")}
        <ul class="fp-feats">${active.features.slice(0, 4).map((f) => `<li style="--pc:${active.color}">${icon("check")} ${t(f.title)}</li>`).join("")}</ul>
      </div>`;
    panel.querySelectorAll(".fp-item").forEach((b) => b.addEventListener("click", () => renderFeaturePanel(groupId, b.dataset.slug)));
  }

  function platformSection() {
    const { t, getProduct, sectionHead } = UI;
    const flow = [
      ["crm", "Fırsat oluştu"],
      ["teklif", "Teklif gönderildi"],
      ["fatura", "Fatura kesildi"],
      ["muhasebe", "Kayıt işlendi"],
      ["cari", "Mutabakat yapıldı"],
    ];
    const benefits = [
      { icon: "database", title: "Ortak veri modeli", text: "Müşteri, ürün ve çalışan kayıtları tüm uygulamalarda tektir; çift giriş ve tutarsızlık biter." },
      { icon: "lock", title: "Tek oturum & merkezi yetki", text: "Tek kullanıcı hesabı, SSO desteği ve rol bazlı yetkilendirme ile güvenli erişim." },
      { icon: "workflow", title: "Uygulamalar arası otomasyon", text: "Bir uygulamadaki olay diğerinde süreci tetikler; onaylar ve bildirimler otomatik akar." },
      { icon: "plug", title: "Açık API & entegrasyon", text: "REST API ve webhook'larla mevcut ERP, e-ticaret ve banka sistemlerinize bağlanın." },
    ];
    return `
    <section class="section soft" id="platform">
      <div class="container">
        ${sectionHead("Ortak Platform", "Bir kez girin, her yerde kullanın", "{{brand}} uygulamaları aynı veri tabanını ve süreç motorunu paylaşır. CRM'de açılan bir fırsat; teklife, faturaya, muhasebeye ve cari mutabakata kendiliğinden akar.")}
        <div class="flow reveal">
          ${flow
            .map(([slug, label], i) => {
              const p = getProduct(slug);
              return `<div class="flow-step" style="--pc:${p.color}">
                <span class="flow-ico">${icon(p.icon)}</span>
                <small>${i + 1}. ${label}</small>
                <strong>${t(p.name)}</strong>
              </div>`;
            })
            .join(`<span class="flow-arrow">${icon("arrowRight")}</span>`)}
        </div>
        <div class="benefits">
          ${benefits.map((b) => `<div class="benefit reveal"><span class="b-ico">${icon(b.icon)}</span><h3>${b.title}</h3><p>${t(b.text)}</p></div>`).join("")}
        </div>
      </div>
    </section>`;
  }

  function migrationSection() {
    const { t, url } = UI;
    return `
    <section class="section">
      <div class="container migrate">
        <div class="migrate-head reveal">
          <span class="eyebrow">Veri Aktarımı</span>
          <h2>Sıfırdan değil,<br>kaldığınız yerden başlayın!</h2>
          <p>${t("Mevcut programlarınızdaki verileri {{brand}} platformuna taşıyın; geçmişinizi kaybetmeden işinizi bir üst seviyeye taşıyın.")}</p>
        </div>
        <div class="migrate-cards">
          <div class="migrate-card reveal">
            <span class="b-ico">${icon("upload")}</span>
            <h3>Birkaç adımda kendiniz aktarın</h3>
            <p>Excel şablonlarımızla cari, ürün ve çalışan listelerinizi; ZIP olarak e-Fatura ve e-Arşiv XML dosyalarınızı yükleyin. Geçmiş kayıtlarınız dakikalar içinde hazır.</p>
            <a class="text-link" href="${url("iletisim.html")}">Aktarım rehberi ${icon("arrowRight")}</a>
          </div>
          <div class="migrate-card accent reveal">
            <span class="b-ico">${icon("headset")}</span>
            <h3>Uzman ekibimiz aktarsın</h3>
            <p>Vaktiniz yoksa süreci bize bırakın. Uzman ekibimiz verilerinizi aynı gün içinde aktarsın, siz günlük işlerinize odaklanmaya devam edin.</p>
            <a class="text-link" href="${url("iletisim.html#demo")}">Aktarım talep edin ${icon("arrowRight")}</a>
          </div>
        </div>
      </div>
    </section>`;
  }

  function mobileSection() {
    const { t, getProduct } = UI;
    const p = getProduct("muhasebe");
    return `
    <section class="section soft">
      <div class="container split">
        <div class="split-text reveal">
          <span class="eyebrow">Mobil</span>
          <h2>${t("Dilediğiniz zaman, dilediğiniz yerden: {{brand}} cebinizde")}</h2>
          <p>Onay bekleyen işlemler, satış fırsatları, faturalar ve izin talepleri cebinizde. Bilgisayardan başladığınız işi telefondan tamamlayın.</p>
          <ul class="check-list">
            <li>${icon("check")} Mobil onay ve anlık bildirimler</li>
            <li>${icon("check")} 4 adımda e-fatura düzenleme</li>
            <li>${icon("check")} Sahadaki ekip için CRM ve görevler</li>
          </ul>
          <div class="store-btns">
            <a class="store-btn" href="#">${icon("download")}<span><small>İndirin</small>App Store</span></a>
            <a class="store-btn" href="#">${icon("play")}<span><small>Edinin</small>Google Play</span></a>
          </div>
        </div>
        <div class="phone-wrap reveal">
          <div class="phone" style="--pc:${p.color}">
            <div class="phone-notch"></div>
            <div class="phone-screen">
              <div class="ph-head"><span>Günaydın 👋</span><strong>${t("{{brand}}")}</strong></div>
              <div class="ph-card main"><small>Bu ay net kâr</small><strong>₺556.400</strong><em>+%41</em></div>
              <div class="ph-grid">
                ${["fatura", "crm", "hr", "surec"].map((s) => { const q = getProduct(s); return `<div class="ph-app" style="--pc:${q.color}">${icon(q.icon)}<span>${q.short}</span></div>`; }).join("")}
              </div>
              <div class="ph-card"><small>Onay bekleyen</small><div class="ph-row">${icon("workflow")} Satın alma talebi <b>₺64.000</b></div><div class="ph-row">${icon("calendar")} Yıllık izin · 3 gün <b>Ahmet Y.</b></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }

  function testimonialsSection() {
    const { t, getProduct, sectionHead } = UI;
    const picks = ["crm", "muhasebe", "surec", "teklif", "cari", "destek"].map(getProduct);
    const stars = Array.from({ length: 5 }, () => icon("star", "fill")).join("");
    return `
    <section class="section" id="musteriler">
      <div class="container">
        ${sectionHead("Mutlu Müşteriler", "Müşterilerimiz {{brand}} deneyimini anlatıyor", "Farklı sektörlerden işletmeler, operasyonlarını tek platformda birleştirmenin farkını yaşıyor.")}
        <div class="testimonials">
          ${picks
            .map(
              (p) => `<figure class="tcard reveal" style="--pc:${p.color}">
                <div class="stars">${stars}</div>
                <blockquote>“${t(p.testimonial.quote)}”</blockquote>
                <figcaption>
                  <span class="avatar">${p.testimonial.name.charAt(0)}</span>
                  <span><strong>${p.testimonial.name}</strong><small>${p.testimonial.role}</small></span>
                  <span class="tc-tag">${icon(p.icon)} ${p.short}</span>
                </figcaption>
              </figure>`
            )
            .join("")}
        </div>
      </div>
    </section>`;
  }

  function blogSection() {
    const { t, sectionHead } = UI;
    const posts = [
      { color: "#dc2626", icon: "fileCheck", cat: "e-Dönüşüm", title: "2026'da e-Fatura zorunluluğu: Kimler geçmeli, nasıl geçilir?", time: "6 dk" },
      { color: "#4f46e5", icon: "workflow", cat: "Süreç Yönetimi", title: "BPMN nedir? Süreç modellemeye 10 adımda giriş", time: "8 dk" },
      { color: "#c026d3", icon: "handshake", cat: "Finans", title: "Cari mutabakat ve BA/BS formları için kontrol listesi", time: "5 dk" },
    ];
    return `
    <section class="section soft" id="blog">
      <div class="container">
        ${sectionHead("Blog", "{{brand}} Blog", "Ürün haberleri, mevzuat güncellemeleri ve işletmenizi büyütecek ipuçları.")}
        <div class="blog-grid">
          ${posts
            .map(
              (b) => `<a class="blog-card reveal" href="#" style="--pc:${b.color}">
                <div class="blog-cover">${icon(b.icon)}</div>
                <div class="blog-body"><span class="blog-cat">${b.cat} · ${b.time} okuma</span><h3>${b.title}</h3><span class="text-link">Devamını okuyun ${icon("arrowRight")}</span></div>
              </a>`
            )
            .join("")}
        </div>
      </div>
    </section>`;
  }

  function contactSection() {
    const { sectionHead, contactCards } = UI;
    return `
    <section class="section">
      <div class="container">
        ${sectionHead("İletişim", "Bize dilediğiniz yerden ulaşabilirsiniz", "Her türlü soru, geri bildirim ve önerinize değer veriyoruz.")}
        ${contactCards()}
      </div>
    </section>`;
  }

  function home() {
    return [
      homeHero(),
      promoSlider(),
      trustStrip(),
      featureTabs(),
      platformSection(),
      migrationSection(),
      mobileSection(),
      testimonialsSection(),
      UI.ctaBand(),
      blogSection(),
      contactSection(),
    ].join("");
  }

  /* Hub çizgileri: kartlardan merkeze eğri bağlantılar */
  function drawHubLines() {
    const hub = document.getElementById("hub");
    const svg = document.getElementById("hubLines");
    const core = document.getElementById("hubCore");
    if (!hub || !svg || !core) return;
    const hb = hub.getBoundingClientRect();
    if (window.innerWidth < 980) { svg.innerHTML = ""; return; }
    const cb = core.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${hb.width} ${hb.height}`);
    let paths = "";
    ["left", "right"].forEach((side) => {
      const chips = [...hub.querySelectorAll(`.hub-chip.${side}`)];
      chips.forEach((c, i) => {
        const b = c.getBoundingClientRect();
        const color = getComputedStyle(c).getPropertyValue("--pc").trim();
        const x1 = (side === "left" ? b.right : b.left) - hb.left;
        const y1 = b.top + b.height / 2 - hb.top;
        const spread = (i - (chips.length - 1) / 2) / ((chips.length - 1) / 2); // -1..1
        const x2 = (side === "left" ? cb.left + cb.width * 0.18 : cb.right - cb.width * 0.18) - hb.left;
        const y2 = cb.top + cb.height * 0.5 + spread * cb.height * 0.32 - hb.top;
        const mx = (x1 + x2) / 2;
        const d = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
        paths += `<path d="${d}" stroke="${color}" class="hl-base"/><path d="${d}" stroke="${color}" class="hl-flow" style="animation-delay:${i * 0.4}s"/><circle cx="${x1}" cy="${y1}" r="3.5" fill="${color}"/>`;
      });
    });
    svg.innerHTML = paths;
  }

  /* =========================================================
   *  ÜRÜN LANDING PAGE
   * ======================================================= */
  function product(data) {
    const { t, getProduct, productUrl, url, signupUrl, sectionHead, mock, faq, ctaBand, productCard } = UI;
    const p = getProduct(data.product);
    if (!p) return `<section class="section"><div class="container"><h1>Ürün bulunamadı</h1></div></section>`;
    document.title = t(`${p.name} — ${p.category} | {{brand}} {{suite}}`);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(p.summary));

    const tiers = ["Başlangıç", "Profesyonel", "Kurumsal"];
    const stars = Array.from({ length: 5 }, () => icon("star", "fill")).join("");

    return `
    <div class="product-page" style="--pc:${p.color}">
      <section class="p-hero">
        <div class="container p-hero-grid">
          <div class="p-hero-text">
            <nav class="crumbs reveal"><a href="${url("index.html")}">Ana Sayfa</a>${icon("chevronRight")}<a href="${url("index.html#uygulamalar")}">Uygulamalar</a>${icon("chevronRight")}<span>${t(p.name)}</span></nav>
            <span class="p-badge reveal"><span class="pc-ico">${icon(p.icon)}</span>${t(p.name)} · ${p.category}</span>
            <h1 class="reveal">${t(p.hero.title)} <span class="p-hl">${t(p.hero.highlight)}</span></h1>
            <p class="lead reveal">${t(p.hero.text)}</p>
            <div class="hero-actions reveal">
              <a class="btn btn-product btn-lg" href="${signupUrl()}">Ücretsiz Deneyin ${icon("arrowRight")}</a>
              <a class="btn btn-outline btn-lg" href="${url("iletisim.html#demo")}">Demo Talep Edin</a>
            </div>
            <ul class="hero-checks dark reveal">
              <li>${icon("check")} Kredi kartı gerekmez</li>
              <li>${icon("check")} ${t("{{trialDays}} gün ücretsiz")}</li>
              <li>${icon("check")} Türkçe destek</li>
            </ul>
          </div>
          <div class="p-hero-visual reveal">
            ${mock(p, "dashboard")}
            <div class="float-card fc1">${icon("check")}<span><strong>${p.stats[0].value}</strong><small>${p.stats[0].label}</small></span></div>
            <div class="float-card fc2">${icon("zap")}<span><strong>${p.stats[1].value}</strong><small>${p.stats[1].label}</small></span></div>
          </div>
        </div>
      </section>

      <section class="p-stats">
        <div class="container p-stats-grid">
          ${p.stats.map((s) => `<div class="p-stat reveal"><strong>${t(s.value)}</strong><span>${t(s.label)}</span></div>`).join("")}
        </div>
      </section>

      <section class="section" id="ozellikler">
        <div class="container">
          ${sectionHead("Özellikler", `${p.name} ile neler yapabilirsiniz?`, p.summary)}
          <div class="feature-grid">
            ${p.features.map((f) => `<div class="feature reveal"><span class="f-ico">${icon(f.icon)}</span><h3>${t(f.title)}</h3><p>${t(f.text)}</p></div>`).join("")}
          </div>
        </div>
      </section>

      ${p.sections
        .map(
          (s, i) => `
      <section class="section ${i % 2 === 0 ? "soft" : ""}">
        <div class="container split ${i % 2 === 1 ? "reverse" : ""}">
          <div class="split-text reveal">
            <span class="eyebrow">${t(s.eyebrow)}</span>
            <h2>${t(s.title)}</h2>
            <p>${t(s.text)}</p>
            <ul class="check-list">${s.bullets.map((b) => `<li>${icon("check")} ${t(b)}</li>`).join("")}</ul>
          </div>
          <div class="split-visual reveal">${mock(p, s.mock)}</div>
        </div>
      </section>`
        )
        .join("")}

      <section class="section">
        <div class="container">
          ${sectionHead("Başlangıç", "3 adımda kullanmaya başlayın", `${p.name} kurulum gerektirmez; dakikalar içinde hazırsınız.`)}
          <div class="steps">
            ${p.steps.map((s, i) => `<div class="step reveal"><span class="step-no">${i + 1}</span><h3>${t(s.title)}</h3><p>${t(s.text)}</p></div>`).join("")}
          </div>
        </div>
      </section>

      <section class="section soft">
        <div class="container split">
          <div class="split-text reveal">
            <span class="eyebrow">{{suite}}</span>
            <h2>${t(`${p.name}, diğer {{brand}} uygulamalarıyla daha güçlü`)}</h2>
            <p>${t("Tüm {{brand}} uygulamaları ortak veri tabanını ve tek kullanıcı hesabını paylaşır. Verileriniz uygulamalar arasında kendiliğinden akar, aynı bilgiyi iki kez girmezsiniz.")}</p>
            <a class="btn btn-outline" href="${url("fiyatlar.html")}">Suite paketlerini inceleyin ${icon("arrowRight")}</a>
          </div>
          <div class="orbit reveal">
            <div class="orbit-center" style="--pc:${p.color}">${icon(p.icon)}<strong>${t(p.name)}</strong></div>
            ${p.related
              .map((slug, i) => {
                const r = getProduct(slug);
                return `<a class="orbit-item o${i}" href="${productUrl(r.slug)}" style="--pc:${r.color}">${icon(r.icon)}<span>${t(r.name)}</span></a>`;
              })
              .join("")}
            <svg class="orbit-lines" viewBox="0 0 400 320" aria-hidden="true"><path d="M200 160 L70 60"/><path d="M200 160 L330 60"/><path d="M200 160 L200 290"/></svg>
          </div>
        </div>
      </section>

      <section class="section" id="fiyatlar">
        <div class="container">
          ${sectionHead("Fiyatlandırma", `${p.name} paketleri`, "İhtiyacınıza uygun paketi seçin, istediğiniz zaman yükseltin. Yıllık ödemede %20 indirim.")}
          <div class="pricing">
            ${p.pricing
              .map(
                (pl, i) => `<div class="plan ${i === 1 ? "featured" : ""} reveal">
                  ${i === 1 ? `<span class="plan-tag">En Popüler</span>` : ""}
                  <h3>${tiers[i]}</h3>
                  <div class="plan-price">${pl.price ? `<strong>₺${pl.price}</strong><small>${pl.unit.replace("₺ ", "")}</small>` : `<strong class="quote">Size özel</strong><small>teklif alın</small>`}</div>
                  <ul>${pl.features.map((f) => `<li>${icon("check")} ${t(f)}</li>`).join("")}</ul>
                  <a class="btn ${i === 1 ? "btn-product" : "btn-outline"}" href="${pl.price ? signupUrl() : url("iletisim.html#demo")}">${pl.price ? "Ücretsiz Deneyin" : "Bize Ulaşın"}</a>
                </div>`
              )
              .join("")}
          </div>
          <p class="fine">Fiyatlara KDV dahil değildir. Fiyatlar örnek amaçlıdır.</p>
        </div>
      </section>

      <section class="section soft">
        <div class="container">
          <figure class="big-quote reveal">
            <span class="q-ico">${icon("quote")}</span>
            <div class="stars">${stars}</div>
            <blockquote>${t(p.testimonial.quote)}</blockquote>
            <figcaption><span class="avatar">${p.testimonial.name.charAt(0)}</span><span><strong>${p.testimonial.name}</strong><small>${p.testimonial.role}</small></span></figcaption>
          </figure>
        </div>
      </section>

      <section class="section">
        <div class="container narrow">
          ${sectionHead("SSS", "Sıkça sorulan sorular", "")}
          ${faq(p.faq)}
        </div>
      </section>

      ${ctaBand(`${p.name} ile {{trialDays}} gün ücretsiz tanışın!`, "Kredi kartı gerekmeden hemen başlayın. Kurulum yok, taahhüt yok.")}

      <section class="section">
        <div class="container">
          ${sectionHead("Keşfedin", "Diğer {{brand}} uygulamaları", "")}
          <div class="product-grid compact">${P().filter((x) => x.slug !== p.slug).map((x) => productCard(x, true)).join("")}</div>
        </div>
      </section>
    </div>`;
  }

  /* =========================================================
   *  FİYATLAR
   * ======================================================= */
  function pricing() {
    const { t, productUrl, url, signupUrl, sectionHead, faq, ctaBand } = UI;
    document.title = t("Fiyatlar | {{brand}} {{suite}}");
    const bundles = [
      { name: "Başlangıç Suite", monthly: 1490, desc: "Küçük işletmeler için temel uygulamalar.", feats: ["Seçeceğiniz 3 uygulama", "5 kullanıcı", "Ortak veri platformu", "E-posta desteği", "Mobil uygulamalar"] },
      { name: "Profesyonel Suite", monthly: 3490, desc: "Büyüyen ekipler için kapsamlı paket.", feats: ["Seçeceğiniz 6 uygulama", "25 kullanıcı", "Uygulamalar arası otomasyon", "Telefon & canlı destek", "Gelişmiş raporlar"], featured: true },
      { name: "Kurumsal Suite", monthly: null, desc: "Tüm uygulamalar ve kurumsal ihtiyaçlar.", feats: ["Tüm 10 uygulama", "Sınırsız kullanıcı", "SSO / LDAP & API", "Özel SLA ve atanmış yönetici", "On-premise seçeneği"] },
    ];
    const generalFaq = [
      { q: "Uygulamaları tek tek satın alabilir miyim?", a: "Evet. Her uygulamayı ayrı ayrı kullanabilir, ihtiyacınız arttıkça suite paketlerine geçebilirsiniz." },
      { q: "Ücretsiz deneme süresinde tüm özellikler açık mı?", a: "{{trialDays}} günlük deneme boyunca seçtiğiniz uygulamaların tüm Profesyonel özellikleri açıktır. Kredi kartı istenmez." },
      { q: "Paketimi daha sonra değiştirebilir miyim?", a: "İstediğiniz zaman paket yükseltebilir veya uygulama ekleyip çıkarabilirsiniz; ücret farkı gün bazında hesaplanır." },
      { q: "Verilerim nerede saklanıyor?", a: "Tüm veriler Türkiye'deki ISO 27001 sertifikalı veri merkezlerinde, KVKK'ya uygun şekilde saklanır." },
    ];
    return `
    <section class="page-hero">
      <div class="container center">
        <span class="eyebrow light reveal">Fiyatlar</span>
        <h1 class="reveal">Size uygun paketi seçin</h1>
        <p class="lead reveal">${t("Tek bir uygulamayla başlayın ya da {{suite}} paketleriyle tüm işletmenizi tek platformda yönetin.")}</p>
        <div class="bill-toggle reveal" id="billToggle">
          <button class="on" data-bill="m">Aylık</button>
          <button data-bill="y">Yıllık <em>%20 indirim</em></button>
        </div>
      </div>
    </section>
    <section class="section pull-up">
      <div class="container">
        <div class="pricing">
          ${bundles
            .map(
              (b) => `<div class="plan ${b.featured ? "featured" : ""} reveal">
                ${b.featured ? `<span class="plan-tag">En Popüler</span>` : ""}
                <h3>${b.name}</h3><p class="plan-desc">${b.desc}</p>
                <div class="plan-price">${
                  b.monthly
                    ? `<strong data-m="${b.monthly}">₺${b.monthly.toLocaleString("tr-TR")}</strong><small>/ ay</small>`
                    : `<strong class="quote">Size özel</strong><small>teklif alın</small>`
                }</div>
                <ul>${b.feats.map((f) => `<li>${icon("check")} ${f}</li>`).join("")}</ul>
                <a class="btn ${b.featured ? "btn-primary" : "btn-outline"}" href="${b.monthly ? signupUrl() : url("iletisim.html#demo")}">${b.monthly ? "Ücretsiz Deneyin" : "Bize Ulaşın"}</a>
              </div>`
            )
            .join("")}
        </div>
        <p class="fine">Fiyatlara KDV dahil değildir. Fiyatlar örnek amaçlıdır.</p>
      </div>
    </section>
    <section class="section soft">
      <div class="container">
        ${sectionHead("Uygulama bazında", "Uygulamaları tek tek de kullanabilirsiniz", "Her uygulamanın detaylı paketlerini ürün sayfasında inceleyebilirsiniz.")}
        <div class="app-table reveal">
          ${P()
            .map((p) => {
              const first = p.pricing.find((x) => x.price);
              return `<a class="app-row" href="${productUrl(p.slug)}#fiyatlar" style="--pc:${p.color}">
                <span class="pc-ico">${icon(p.icon)}</span>
                <span class="ar-name"><strong>${t(p.name)}</strong><small>${p.category}</small></span>
                <span class="ar-price"><small>başlayan fiyatlarla</small><strong>₺${first.price}</strong> <em>${first.unit.replace("₺ ", "")}</em></span>
                <span class="ar-go">${icon("arrowRight")}</span>
              </a>`;
            })
            .join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container narrow">
        ${sectionHead("SSS", "Fiyatlandırma hakkında sorular", "")}
        ${faq(generalFaq)}
      </div>
    </section>
    ${ctaBand()}`;
  }

  /* =========================================================
   *  İLETİŞİM / DEMO
   * ======================================================= */
  function contact() {
    const { t, contactCards } = UI;
    const C = window.SITE_CONFIG;
    document.title = t("İletişim & Demo | {{brand}} {{suite}}");
    const options = P().map((p) => `<option value="${p.slug}">${t(p.name)}</option>`).join("");
    return `
    <section class="page-hero">
      <div class="container center">
        <span class="eyebrow light reveal">İletişim</span>
        <h1 class="reveal">Size nasıl yardımcı olabiliriz?</h1>
        <p class="lead reveal">Demo talep edin, fiyat teklifi alın ya da sorularınızı iletin. Uzman ekibimiz en kısa sürede dönüş yapsın.</p>
      </div>
    </section>
    <section class="section pull-up" id="demo">
      <div class="container contact-grid">
        <form class="form-card reveal" id="demoForm" novalidate>
          <h2>Demo & bilgi talebi</h2>
          <p>Formu doldurun, ekibimiz 1 iş günü içinde sizinle iletişime geçsin.</p>
          <div class="form-row">
            <label>Ad Soyad<input name="name" required autocomplete="name"></label>
            <label>Şirket<input name="company" autocomplete="organization"></label>
          </div>
          <div class="form-row">
            <label>E-posta<input type="email" name="email" required autocomplete="email"></label>
            <label>Telefon<input type="tel" name="phone" autocomplete="tel"></label>
          </div>
          <label>İlgilendiğiniz uygulama
            <select name="product"><option value="suite">${t("{{brand}} {{suite}} (Tümü)")}</option>${options}</select>
          </label>
          <label>Mesajınız<textarea name="message" rows="4" placeholder="İhtiyaçlarınızdan kısaca bahsedin"></textarea></label>
          <label class="check"><input type="checkbox" required> <span>KVKK Aydınlatma Metni'ni okudum, iletişim amacıyla verilerimin işlenmesini kabul ediyorum.</span></label>
          <button class="btn btn-primary btn-lg" type="submit">Gönder ${icon("send")}</button>
          <div class="form-ok" hidden>${icon("check")} Teşekkürler! Talebiniz alındı, en kısa sürede dönüş yapacağız.</div>
        </form>
        <aside class="contact-side reveal">
          <div class="cs-box">
            <h3>${t(C.company)}</h3>
            <p>${icon("mapPin")} ${t(C.address)}</p>
            <p>${icon("phone")} ${C.phone}</p>
            <p>${icon("mail")} ${t(C.email)}</p>
            <p>${icon("clock")} Hafta içi 09.00 – 18.00</p>
          </div>
          <div class="cs-box accent">
            <h3>Hemen başlamak ister misiniz?</h3>
            <p>${t("{{trialDays}} gün boyunca tüm uygulamaları ücretsiz deneyin.")}</p>
            <a class="btn btn-white" href="${t(C.loginUrl)}">Ücretsiz Hesap Açın</a>
          </div>
        </aside>
      </div>
    </section>
    <section class="section soft"><div class="container">${contactCards()}</div></section>`;
  }

  /* =========================================================
   *  Render sonrası etkileşimler
   * ======================================================= */
  function after(page) {
    if (page === "home") {
      const tabs = document.querySelectorAll(".ftab");
      tabs.forEach((b) =>
        b.addEventListener("click", () => {
          tabs.forEach((x) => x.classList.remove("on"));
          b.classList.add("on");
          renderFeaturePanel(b.dataset.group);
        })
      );
      renderFeaturePanel(G()[0].id);
      drawHubLines();
      let raf;
      window.addEventListener("resize", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(drawHubLines); });
      // Font yüklenince yerleşim değişebilir
      if (document.fonts) document.fonts.ready.then(drawHubLines);
      setTimeout(drawHubLines, 700);
    }
    if (page === "pricing") {
      const btns = document.querySelectorAll("#billToggle button");
      btns.forEach((b) =>
        b.addEventListener("click", () => {
          btns.forEach((x) => x.classList.remove("on"));
          b.classList.add("on");
          const yearly = b.dataset.bill === "y";
          document.querySelectorAll(".plan-price strong[data-m]").forEach((s) => {
            const m = Number(s.dataset.m);
            s.textContent = "₺" + Math.round(yearly ? m * 0.8 : m).toLocaleString("tr-TR");
          });
        })
      );
    }
    if (page === "contact") {
      const f = document.getElementById("demoForm");
      f.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!f.checkValidity()) { f.classList.add("validated"); f.reportValidity(); return; }
        // TODO: Formu kendi backend / CRM uç noktanıza bağlayın.
        f.querySelector(".form-ok").hidden = false;
        f.querySelector('button[type="submit"]').disabled = true;
      });
    }
    // Hash ile gelindiyse render sonrası ilgili bölüme kaydır
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView(), 50);
    }
  }

  window.Pages = { home, product, pricing, contact, after };
})();
