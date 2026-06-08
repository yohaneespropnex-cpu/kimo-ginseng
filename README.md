# Kimo Ginseng — Landing Page

Landing page premium, modern, dan responsif untuk **Kimo Ginseng** — suplemen
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

### Mengganti Gambar

Semua gambar saat ini berupa **placeholder SVG** di folder `public/images/`:

- `product.svg` → foto produk Kimo Ginseng
- `ginseng.svg` → foto Ginseng Merah Korea
- `ashwagandha.svg` → foto Ashwagandha
- `og-image.svg` → gambar share media sosial (disarankan 1200×630)

Ganti dengan foto asli (PNG/JPG). Jika nama/ekstensi file berbeda, sesuaikan
path-nya di `src/config/content.ts` dan `src/components/Hero.tsx`.

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
git commit -m "Kimo Ginseng landing page"
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
