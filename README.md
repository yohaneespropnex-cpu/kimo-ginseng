# Kimo Men — Landing Page

Landing page premium, modern, dan responsif untuk **Kimo Men** — suplemen
herbal vitalitas & stamina pria dewasa (18+) dari **Kimo Suplemen**.

Dibangun dengan **Vite + React + TypeScript + Tailwind CSS**. Ringan, cepat,
SEO-friendly, dan siap di-deploy ke **GitHub Pages**.

> ⚠️ **Disclaimer:** Produk ini adalah suplemen kesehatan herbal, bukan obat.
> Hasil dapat berbeda pada setiap orang. Konsultasikan dengan tenaga kesehatan
> sebelum penggunaan. Khusus dewasa 18+.

---

## ✨ Fitur

- Desain mewah: tema gelap dengan aksen emas & teks krem, tipografi serif + sans-serif
- Animasi halus saat scroll (IntersectionObserver, tanpa library berat)
- Fully responsive (mobile-first) & aksesibel (kontras, alt text, navigasi keyboard, `prefers-reduced-motion`)
- Tombol WhatsApp melayang + CTA di banyak titik
- Section lengkap: Hero, Manfaat, Kandungan, Cara Pakai, Sertifikasi, Testimoni, CTA, FAQ, Footer
- Meta SEO + Open Graph + favicon
- Semua data penting terpusat di **satu** folder config

---

## 🛠️ Menjalankan Secara Lokal

Butuh **Node.js 18+** (disarankan 20).

```bash
# 1. Install dependencies
npm install

# 2. Jalankan server pengembangan
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

### Build untuk produksi

```bash
npm run build      # hasil build ada di folder /dist
npm run preview    # pratinjau hasil build secara lokal
```

---

## ✏️ Mengganti Data (Penting)

Semua data yang sering diganti ada di folder **`src/config/`**:

| File | Isi |
|------|-----|
| `src/config/site.ts` | Nomor WhatsApp, email, Instagram, nama bisnis, disclaimer |
| `src/config/content.ts` | Teks manfaat, kandungan, langkah pakai, testimoni, FAQ |

**Yang wajib diganti** (cari tanda `[GANTI]`):

1. `WHATSAPP_NUMBER` di `src/config/site.ts` — ganti `6281234567890` dengan nomor asli (format `62...`, tanpa `+` atau spasi).
2. `SITE.email`, `SITE.legalName`, `SITE.address` di `src/config/site.ts`.
3. Username Instagram sudah diisi `kimosuplemen` — ubah bila perlu.
4. `SITE_URL` di `src/config/site.ts` — URL publik situs. **Wajib diganti** bila
   pindah ke custom domain (dipakai canonical, Open Graph, sitemap, JSON-LD).

### Mengganti Gambar

Foto ada di `public/images/` dalam dua bentuk: `.jpg` (fallback) dan varian
WebP responsif (`-480.webp`, `-720.webp`, …) yang dipilih otomatis sesuai layar.

| File | Varian WebP yang dibutuhkan |
|------|-----------------------------|
| `product.jpg` (864×1184) | `product-480/720/864.webp` |
| `ginseng.jpg`, `ashwagandha.jpg` (1184×864) | `-480.webp`, `-800.webp` |
| `og-image.jpg` (1200×630) | — (gambar share WhatsApp/FB/X) |

Setelah mengganti `.jpg`, buat ulang varian WebP (butuh Pillow):

```bash
cd public/images && python3 -c "
from PIL import Image
for n,ws in {'product':[480,720,864],'ginseng':[480,800],'ashwagandha':[480,800]}.items():
    im=Image.open(n+'.jpg').convert('RGB')
    for w in ws: im.resize((w,round(im.height*w/im.width)),Image.LANCZOS).save(f'{n}-{w}.webp','WEBP',quality=78,method=6)"
```

Jika dimensi foto baru berbeda, sesuaikan `width`/`height` di
`src/components/Hero.tsx` dan `src/components/Ingredients.tsx`.

---

## 🔎 SEO & Performa

- **Prerender (SSG):** `npm run build` merender halaman jadi HTML statis
  (`src/entry-server.tsx` + `scripts/prerender.mjs`), jadi konten langsung
  terbaca Google, scraper sosial, dan tampil sebelum JS jalan.
- **Meta & structured data** otomatis dari `src/config/site.ts`: title,
  description, canonical, Open Graph, Twitter Card, dan JSON-LD
  (`Organization`, `WebSite`, `Product`, `FAQPage`).
- **`sitemap.xml` & `robots.txt`** dibuat saat build dari `SITE_URL`.
- **Font self-host** (`@fontsource`, subset latin) — tanpa request ke Google Fonts.
- Skor Lighthouse (build lokal): mobile 98/100/100/100, desktop 100/100/100/100.

Setelah live, daftarkan situs di **Google Search Console** dan submit
`sitemap.xml`. Catatan: pada GitHub Pages *project site*, `robots.txt` di
subfolder tidak dibaca crawler (hanya `robots.txt` di root domain) — sitemap
tetap bisa disubmit manual lewat Search Console.

---

## 🚀 Deploy ke GitHub Pages

Repo ini sudah menyertakan workflow otomatis di
`.github/workflows/deploy.yml`. Setiap kali kamu **push ke branch `main`**,
situs akan otomatis di-build dan dipublikasikan.

### Langkah pertama kali

1. **Buat repo baru** di GitHub (mis. `kimo-ginseng`).
2. Hubungkan & push proyek ini (lihat perintah di bawah).
3. Di GitHub, buka **Settings → Pages**.
4. Pada bagian **Build and deployment → Source**, pilih **GitHub Actions**.
5. Tunggu workflow di tab **Actions** selesai (centang hijau).
6. Situs akan tersedia di `https://<username>.github.io/<nama-repo>/`.

### Perintah push pertama

```bash
# Di dalam folder proyek
git init
git add .
git commit -m "Kimo Men landing page"
git branch -M main

# Ganti URL berikut dengan repo GitHub kamu
git remote add origin https://github.com/<username>/<nama-repo>.git
git push -u origin main
```

> **Catatan teknis:** `vite.config.ts` memakai `base: './'` (path relatif),
> sehingga situs berfungsi di subfolder GitHub Pages **tanpa** perlu menyesuaikan
> nama repo. Jika nanti memakai custom domain, ini tetap berjalan normal.

---

## 📁 Struktur Folder

```
.
├── .github/workflows/deploy.yml   # CI/CD GitHub Pages
├── public/
│   ├── favicon.svg
│   └── images/                    # Placeholder gambar (ganti dengan foto asli)
├── src/
│   ├── components/                # Komponen UI reusable & section
│   ├── config/
│   │   ├── site.ts                # ← Data bisnis & kontak
│   │   └── content.ts             # ← Konten section
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html                     # Meta SEO & Open Graph
├── tailwind.config.js
└── vite.config.ts
```

---

## 📄 Lisensi

Hak cipta © Kimo Suplemen. Seluruh konten dan merek adalah milik pemiliknya.
