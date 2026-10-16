# Business Suite Web Sitesi

Bağımlılık ve build adımı olmayan statik site. Tüm içerik JavaScript ile veri dosyalarından üretilir.

## Çalıştırma

`index.html` dosyasını doğrudan tarayıcıda açabilir ya da yerel sunucu başlatabilirsiniz:

```bash
python -m http.server 8765
```

## Marka adını değiştirme

`assets/js/config.js` içindeki `brand` değerini değiştirin. Ürün adları ("Sense CRM"), başlıklar, footer ve
tüm metinler otomatik güncellenir. Aynı dosyada suite adı, şirket ünvanı, telefon, e-posta, renkler ve logo da var.

Metinlerde `{{brand}}`, `{{suite}}`, `{{company}}`, `{{phone}}`, `{{email}}`, `{{trialDays}}` yer tutucularını kullanın.

> Türkçe ekleri dinamik adlara doğrudan eklemeyin (`{{brand}}'i` gibi): marka değişince ek yanlış olur.
> "{{brand}} ile", "{{brand}} platformunda" gibi eksiz ifadeler kullanın.

## Yapı

| Dosya | İçerik |
|---|---|
| `assets/js/config.js` | Marka ayarları |
| `assets/js/products.js` | 10 ürünün tüm landing page içeriği (özellikler, fiyatlar, SSS, mockup verisi) |
| `assets/js/pages.js` | Ana sayfa, ürün, fiyatlar ve iletişim sayfası şablonları |
| `assets/js/app.js` | Header, mega menü, footer, ortak bileşenler |
| `assets/js/icons.js` | SVG ikon seti |
| `assets/css/style.css` | Tüm stiller |
| `urunler/<slug>.html` | Her ürünün landing page'i |

## Yeni ürün ekleme

1. `products.js` içindeki `PRODUCTS` listesine yeni bir obje ekleyin.
2. `urunler/` altındaki bir dosyayı kopyalayın, adını `<slug>.html` yapın ve `data-product` değerini değiştirin.

## Yayından önce

- Müşteri yorumları, istatistikler (4,8/5, %99,9 vb.), fiyatlar ve blog yazıları **örnek içeriktir**; gerçek verilerle değiştirin.
- İletişim formu şu an sadece teşekkür mesajı gösteriyor. `pages.js` içindeki `TODO` satırında kendi backend/CRM uç noktanıza bağlayın.
- Sayfalar JS ile render edildiği için SEO önemliyse ileride statik üretime (ör. Astro) geçilebilir; veri dosyaları aynen kullanılabilir.
