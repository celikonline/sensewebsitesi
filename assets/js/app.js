/*
 * Ortak çekirdek: marka yer tutucuları, header, footer, ortak bileşenler
 * ve etkileşimler. Sayfa içerikleri pages.js içindedir.
 */
(function () {
  const C = window.SITE_CONFIG;
  const PRODUCTS = window.PRODUCTS;
  const GROUPS = window.PRODUCT_GROUPS;
  const ROOT = document.documentElement.dataset.root || "";
  const YEAR = new Date().getFullYear();

  /* ---------- Yer tutucular ---------- */
  function t(str) {
    if (typeof str !== "string") return str;
    let out = str;
    for (let i = 0; i < 4 && out.includes("{{"); i++) {
      out = out.replace(/\{\{(\w+)\}\}/g, (m, k) => {
        if (k === "root") return ROOT;
        if (k === "year") return YEAR;
        const v = C[k];
        return v != null && typeof v !== "object" ? v : m;
      });
    }
    return out;
  }

  // Statik HTML içindeki {{...}} yer tutucularını da çevir
  function replaceTokensIn(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      if (n.nodeValue.includes("{{")) n.nodeValue = t(n.nodeValue);
    }
    root.querySelectorAll("*").forEach((el) => {
      for (const a of ["title", "alt", "placeholder", "aria-label", "content", "href", "value"]) {
        const v = el.getAttribute(a);
        if (v && v.includes("{{")) el.setAttribute(a, t(v));
      }
    });
    document.title = t(document.title);
  }

  const url = (p) => ROOT + p;
  const productUrl = (slug) => ROOT + "urunler/" + slug + ".html";
  const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
  const signupUrl = () => t(C.signupUrl);

  function logo(light) {
    const src = light ? C.logoLight || C.logo : C.logo;
    if (src) return `<img class="logo-img" src="${url(src)}" alt="${C.brand}">`;
    return `<span class="logo-mark">${C.brand.charAt(0)}</span><span class="logo-text">${C.brand}</span>`;
  }

  /* ---------- Header ---------- */
  function megaMenu() {
    const cols = GROUPS.map((g) => {
      const items = PRODUCTS.filter((p) => p.group === g.id)
        .map(
          (p) => `
          <a class="mega-item" href="${productUrl(p.slug)}" style="--pc:${p.color}">
            <span class="mega-ico">${icon(p.icon)}</span>
            <span><strong>${t(p.name)}</strong><small>${p.category}</small></span>
          </a>`
        )
        .join("");
      return `<div class="mega-col"><div class="mega-title">${g.name}</div>${items}</div>`;
    }).join("");
    return `
      <div class="mega">
        <div class="mega-grid">${cols}</div>
        <div class="mega-foot">
          <span>${icon("layers")} Tüm uygulamalar tek platformda: <strong>${t("{{brand}} {{suite}}")}</strong></span>
          <a href="${url("fiyatlar.html")}">Paketleri inceleyin ${icon("arrowRight")}</a>
        </div>
      </div>`;
  }

  const SOLUTIONS = [
    { name: "Sigorta Acenteleri", slug: "teklif", icon: "shieldCheck" },
    { name: "Üretim & Sanayi", slug: "surec", icon: "workflow" },
    { name: "Toptan & Perakende", slug: "urun", icon: "box" },
    { name: "Hizmet & Danışmanlık", slug: "crm", icon: "userCog" },
    { name: "KOBİ'ler", slug: "muhasebe", icon: "calculator" },
  ];

  function header() {
    const solutions = SOLUTIONS.map(
      (s) => `<a class="drop-item" href="${productUrl(s.slug)}">${icon(s.icon)} ${s.name}</a>`
    ).join("");

    const mobileProducts = PRODUCTS.map(
      (p) => `<a href="${productUrl(p.slug)}" style="--pc:${p.color}"><span class="mega-ico sm">${icon(p.icon)}</span>${t(p.name)}</a>`
    ).join("");

    return `
    <div class="topbar">
      <div class="container topbar-inner">
        <a href="${url("iletisim.html")}">İş Ortaklığı Programı</a>
        <a href="${url("index.html#musteriler")}">Müşterilerimiz</a>
        <a href="${url("iletisim.html")}">Destek</a>
        <a class="topbar-phone" href="tel:${C.phone.replace(/[^0-9+]/g, "")}">${icon("phone")} ${C.phone}</a>
      </div>
    </div>
    <header class="site-header" id="siteHeader">
      <div class="container header-inner">
        <a class="logo" href="${url("index.html")}" aria-label="${C.brand} ana sayfa">${logo()}</a>
        <nav class="nav" aria-label="Ana menü">
          <div class="nav-item has-mega">
            <button class="nav-link" aria-expanded="false">Ürünler ${icon("chevronDown")}</button>
            ${megaMenu()}
          </div>
          <div class="nav-item has-drop">
            <button class="nav-link" aria-expanded="false">Çözümler ${icon("chevronDown")}</button>
            <div class="drop">${solutions}</div>
          </div>
          <a class="nav-link" href="${url("fiyatlar.html")}">Fiyatlar</a>
          <a class="nav-link" href="${url("index.html#platform")}">Platform</a>
          <a class="nav-link" href="${url("index.html#blog")}">Blog</a>
          <a class="nav-link" href="${url("iletisim.html")}">İletişim</a>
        </nav>
        <div class="header-actions">
          <a class="btn btn-outline" href="${t(C.loginUrl)}">Giriş Yapın</a>
          <a class="btn btn-primary" href="${signupUrl()}">Ücretsiz Deneyin</a>
          <button class="burger" id="burger" aria-label="Menüyü aç">${icon("menu")}</button>
        </div>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        <details open><summary>Ürünler ${icon("chevronDown")}</summary><div class="mm-products">${mobileProducts}</div></details>
        <details><summary>Çözümler ${icon("chevronDown")}</summary><div class="mm-links">${solutions}</div></details>
        <a href="${url("fiyatlar.html")}">Fiyatlar</a>
        <a href="${url("index.html#platform")}">Platform</a>
        <a href="${url("index.html#blog")}">Blog</a>
        <a href="${url("iletisim.html")}">İletişim</a>
        <div class="mm-actions">
          <a class="btn btn-outline" href="${t(C.loginUrl)}">Giriş Yapın</a>
          <a class="btn btn-primary" href="${signupUrl()}">Ücretsiz Deneyin</a>
        </div>
      </div>
    </header>`;
  }

  /* ---------- Footer ---------- */
  function footer() {
    const prodLinks = PRODUCTS.map((p) => `<a href="${productUrl(p.slug)}">${t(p.name)}</a>`).join("");
    const s = C.social || {};
    const socials = [
      ["linkedin", s.linkedin],
      ["instagram", s.instagram],
      ["youtube", s.youtube],
      ["xSocial", s.x],
    ]
      .filter((x) => x[1])
      .map((x) => `<a href="${x[1]}" aria-label="${x[0]}">${icon(x[0])}</a>`)
      .join("");

    return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="logo light" href="${url("index.html")}">${logo(true)}</a>
          <p>${t("{{brand}} {{suite}}; insan kaynaklarından e-dönüşüme, CRM'den süreç otomasyonuna kadar işletmenizin tüm uygulamalarını ortak bir veri ve süreç platformunda birleştirir.")}</p>
          <div class="socials">${socials}</div>
        </div>
        <div class="footer-col wide"><h4>Uygulamalar</h4><div class="footer-links two">${prodLinks}</div></div>
        <div class="footer-col"><h4>Kurumsal</h4><div class="footer-links">
          <a href="#">Hakkımızda</a><a href="#">Kariyer</a><a href="${url("index.html#blog")}">Blog</a><a href="${url("iletisim.html")}">İletişim</a>
        </div></div>
        <div class="footer-col"><h4>Destek</h4><div class="footer-links">
          <a href="#">Yardım Merkezi</a><a href="#">API Dokümantasyonu</a><a href="#">Sistem Durumu</a><a href="#">Güvenlik</a>
        </div></div>
        <div class="footer-col"><h4>İletişim</h4><div class="footer-links contact">
          <a href="tel:${C.phone.replace(/[^0-9+]/g, "")}">${icon("phone")} ${C.phone}</a>
          <a href="mailto:${t(C.email)}">${icon("mail")} ${t(C.email)}</a>
          <span>${icon("mapPin")} ${t(C.address)}</span>
        </div></div>
      </div>
      <div class="container footer-bottom">
        <span>© ${YEAR} ${t(C.company)} Tüm hakları saklıdır.</span>
        <span class="footer-legal"><a href="#">Gizlilik Politikası</a><a href="#">KVKK Aydınlatma Metni</a><a href="#">Çerez Politikası</a></span>
      </div>
    </footer>`;
  }

  /* ---------- Ortak bileşenler ---------- */
  function sectionHead(eyebrow, title, text, center = true) {
    return `<div class="section-head ${center ? "center" : ""} reveal">
      ${eyebrow ? `<span class="eyebrow">${t(eyebrow)}</span>` : ""}
      <h2>${t(title)}</h2>
      ${text ? `<p>${t(text)}</p>` : ""}
    </div>`;
  }

  function mockKpis(m) {
    return `<div class="mk-kpis">${m.kpis
      .map(
        (k) => `<div class="mk-kpi"><small>${k.l}</small><strong>${k.v}</strong>${
          k.d ? `<em class="${k.d.startsWith("-") ? "down" : "up"}">${k.d}</em>` : ""
        }</div>`
      )
      .join("")}</div>`;
  }
  function mockBars(m, tall) {
    return `<div class="mk-chart ${tall ? "tall" : ""}">${m.bars
      .map((b, i) => `<span style="height:${b}%;--i:${i}"></span>`)
      .join("")}</div>`;
  }
  function mockRows(m) {
    return `<div class="mk-rows">${m.rows
      .map(
        (r) => `<div class="mk-row"><span class="mk-dot"></span><div><strong>${r.t}</strong><small>${r.m}</small></div><span class="mk-badge ${r.c}">${r.s}</span></div>`
      )
      .join("")}</div>`;
  }
  function mockFlow(m) {
    const nodes = m.rows
      .map((r, i) => `<div class="mk-node ${r.c}"><small>Adım ${i + 1}</small><strong>${r.t}</strong><span class="mk-badge ${r.c}">${r.s}</span></div>`)
      .join(`<span class="mk-arrow">${icon("arrowRight")}</span>`);
    return `<div class="mk-flow"><span class="mk-start"></span>${nodes}<span class="mk-end"></span></div>`;
  }

  // variant: dashboard | list | chart | flow
  function mock(p, variant = "dashboard") {
    const m = p.mock;
    let body = "";
    if (variant === "dashboard") {
      body = `<div class="mk-side">${["chart", p.icon, "users", "fileText", "bell"].map((i, idx) => `<span class="${idx === 1 ? "on" : ""}">${icon(i)}</span>`).join("")}</div>
        <div class="mk-main">${mockKpis(m)}${mockBars(m)}${mockRows(m)}</div>`;
    } else if (variant === "list") {
      body = `<div class="mk-main">${mockKpis(m)}${mockRows(m)}</div>`;
    } else if (variant === "chart") {
      body = `<div class="mk-main">${mockKpis(m)}${mockBars(m, true)}</div>`;
    } else if (variant === "flow") {
      body = `<div class="mk-main">${mockFlow(m)}${mockKpis(m)}</div>`;
    }
    return `<div class="mock mock-${variant}" style="--pc:${p.color}">
      <div class="mk-bar"><i></i><i></i><i></i><span>${t(p.name)} · ${m.title}</span></div>
      <div class="mk-body">${body}</div>
    </div>`;
  }

  function productCard(p, compact) {
    return `<a class="product-card ${compact ? "compact" : ""} reveal" href="${productUrl(p.slug)}" style="--pc:${p.color}">
      <span class="pc-ico">${icon(p.icon)}</span>
      <span class="pc-cat">${p.category}</span>
      <h3>${t(p.name)}</h3>
      ${compact ? "" : `<p>${t(p.summary)}</p>`}
      <span class="pc-link">İncele ${icon("arrowRight")}</span>
    </a>`;
  }

  function faq(items) {
    return `<div class="faq">${items
      .map(
        (f) => `<details class="faq-item reveal"><summary>${t(f.q)}<span class="faq-ico">${icon("plus")}</span></summary><p>${t(f.a)}</p></details>`
      )
      .join("")}</div>`;
  }

  function ctaBand(title, text) {
    return `<section class="cta-band">
      <div class="container cta-inner reveal">
        <div>
          <h2>${t(title || "{{trialDays}} gün boyunca ücretsiz deneyin!")}</h2>
          <p>${t(text || "Kredi kartı gerekmeden hemen başlayın, memnun kalırsanız abone olun.")}</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-white btn-lg" href="${signupUrl()}">Ücretsiz Deneyin</a>
          <a class="btn btn-ghost-light btn-lg" href="${url("iletisim.html#demo")}">Demo Talep Edin</a>
        </div>
      </div>
    </section>`;
  }

  function contactCards() {
    const items = [
      { icon: "phone", title: "Bizi Arayın", text: "Hafta içi 09.00 – 18.00 saatleri arasında uzman ekibimize telefonla ulaşabilirsiniz.", link: `<a href="tel:${C.phone.replace(/[^0-9+]/g, "")}">${C.phone}</a>` },
      { icon: "mail", title: "Bize Yazın", text: "Soru, öneri ve talepleriniz için e-posta gönderin; en geç 1 iş günü içinde yanıtlıyoruz.", link: `<a href="mailto:${t(C.email)}">${t(C.email)}</a>` },
      { icon: "message", title: "Canlı Destek", text: "Hesabınıza giriş yaparak müşteri temsilcilerimizle anında canlı sohbet başlatabilirsiniz.", link: `<a href="${t(C.loginUrl)}">Hesabınıza giriş yapın</a>` },
    ];
    return `<div class="contact-cards">${items
      .map((c) => `<div class="contact-card reveal"><span class="cc-ico">${icon(c.icon)}</span><h3>${c.title}</h3><p>${c.text}</p>${c.link}</div>`)
      .join("")}</div>`;
  }

  /* ---------- Etkileşimler ---------- */
  function initHeader() {
    const h = document.getElementById("siteHeader");
    const onScroll = () => h.classList.toggle("scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const burger = document.getElementById("burger");
    const mm = document.getElementById("mobileMenu");
    burger.addEventListener("click", () => {
      const open = mm.classList.toggle("open");
      burger.innerHTML = icon(open ? "x" : "menu");
      document.body.classList.toggle("no-scroll", open);
    });

    // Dokunmatik / klavye için dropdown aç-kapa
    document.querySelectorAll(".nav-item > .nav-link").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const item = btn.parentElement;
        const open = !item.classList.contains("open");
        document.querySelectorAll(".nav-item.open").forEach((i) => i.classList.remove("open"));
        item.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", open);
        e.stopPropagation();
      });
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-item")) document.querySelectorAll(".nav-item.open").forEach((i) => i.classList.remove("open"));
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") document.querySelectorAll(".nav-item.open").forEach((i) => i.classList.remove("open"));
    });
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((e) => io.observe(e));
  }

  function initSliders() {
    document.querySelectorAll("[data-slider]").forEach((root) => {
      const track = root.querySelector(".slider-track");
      const slides = [...track.children];
      const dots = root.querySelector(".slider-dots");
      let idx = 0, timer;
      const perView = () => (window.innerWidth >= 900 ? Number(root.dataset.per || 1) : 1);
      const max = () => Math.max(0, slides.length - perView());
      function go(i) {
        idx = i > max() ? 0 : i < 0 ? max() : i;
        const w = slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 0);
        track.style.transform = `translateX(${-idx * w}px)`;
        dots.querySelectorAll("button").forEach((d, di) => d.classList.toggle("on", di === idx));
      }
      function buildDots() {
        dots.innerHTML = Array.from({ length: max() + 1 }, (_, i) => `<button aria-label="Slayt ${i + 1}"></button>`).join("");
        dots.querySelectorAll("button").forEach((d, i) => d.addEventListener("click", () => { go(i); restart(); }));
      }
      const restart = () => { clearInterval(timer); timer = setInterval(() => go(idx + 1), 6000); };
      root.querySelector(".slider-prev").addEventListener("click", () => { go(idx - 1); restart(); });
      root.querySelector(".slider-next").addEventListener("click", () => { go(idx + 1); restart(); });
      root.addEventListener("mouseenter", () => clearInterval(timer));
      root.addEventListener("mouseleave", restart);
      window.addEventListener("resize", () => { buildDots(); go(Math.min(idx, max())); });
      buildDots(); go(0); restart();
    });
  }

  function applyTheme() {
    const r = document.documentElement.style;
    const c = C.colors || {};
    if (c.primary) r.setProperty("--primary", c.primary);
    if (c.primaryDark) r.setProperty("--primary-dark", c.primaryDark);
    if (c.navy) r.setProperty("--navy", c.navy);
  }

  /* ---------- Başlat ---------- */
  function boot() {
    applyTheme();
    const page = document.body.dataset.page || "home";
    const app = document.getElementById("app");
    const render = (window.Pages || {})[page];
    const content = render ? render(document.body.dataset) : "";
    app.innerHTML = header() + `<main id="main">${content}</main>` + footer();
    replaceTokensIn(document.body);
    initHeader();
    initSliders();
    if (window.Pages && window.Pages.after) window.Pages.after(page);
    initReveal();
    document.documentElement.classList.add("ready");
  }

  window.UI = { t, url, productUrl, getProduct, signupUrl, sectionHead, mock, productCard, faq, ctaBand, contactCards, logo, ROOT };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
