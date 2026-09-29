/**
 * ============================================================================
 *  KONFIGURASI SITUS — KIMO MEN
 * ============================================================================
 *  Semua data yang perlu kamu ganti ada di SATU file ini.
 *  Cari tanda [GANTI] dan sesuaikan dengan data bisnismu.
 * ============================================================================
 */

/** URL publik situs (WAJIB diakhiri "/"). Dipakai untuk canonical, Open Graph,
 *  sitemap, dan structured data. Ganti bila pindah ke custom domain. [GANTI] */
export const SITE_URL = 'https://yohaneespropnex-cpu.github.io/kimo-ginseng/'

/** Meta SEO utama. Judul ideal ≤ 60 karakter, deskripsi ≤ 155 karakter.
 *  Hindari klaim berlebihan (mis. "tahan lama", "instan") — iklan suplemen
 *  wajib objektif & sesuai klaim label yang disetujui BPOM. */
export const SEO = {
  title: 'Kimo Men — Suplemen Stamina Pria Herbal | Ginseng Merah Korea',
  description:
    'Kimo Men: suplemen herbal pria dari Ginseng Merah Korea & Ashwagandha untuk mendukung stamina dan vitalitas. Terdaftar BPOM, Halal MUI. Khusus 18+.',
  ogImage: 'images/og-image.jpg', // relatif ke SITE_URL, 1200×630
  ogImageAlt: 'Kimo Men — suplemen herbal pria, Ginseng Merah Korea & Ashwagandha',
  locale: 'id_ID',
} as const

/** Nomor WhatsApp dalam format internasional TANPA tanda "+" atau spasi.
 *  Contoh: 6281234567890 (62 = kode Indonesia). [GANTI] */
export const WHATSAPP_NUMBER = '6281234567890'

/** Pesan default yang otomatis terisi saat pelanggan klik tombol WhatsApp. */
export const WHATSAPP_DEFAULT_MESSAGE =
  'Halo Kimo, saya tertarik dengan produk Kimo Men. Boleh info pemesanannya?'

/** Helper untuk membangun link wa.me lengkap. */
export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Identitas brand & kontak. [GANTI sesuai kebutuhan] */
export const SITE = {
  brand: 'Kimo Men',
  company: 'Kimo Suplemen',
  tagline: 'Vitalitas & Stamina Pria, Diracik dari Alam',
  email: 'halo@kimosuplemen.com', // [GANTI]
  instagram: 'kimosuplemen',
  instagramUrl: 'https://www.instagram.com/kimosuplemen/',
  website: 'https://kimosuplemen.com',
  // Detail bisnis untuk footer [GANTI]
  legalName: 'PT Kimo Suplemen Indonesia',
  address: 'Jakarta, Indonesia',
  year: 2026,
} as const

/** Disclaimer kesehatan resmi — tampil di footer & area legal. */
export const HEALTH_DISCLAIMER =
  'Produk ini adalah suplemen kesehatan herbal, bukan obat. Hasil dapat berbeda pada setiap orang. Konsultasikan dengan tenaga kesehatan sebelum penggunaan. Khusus dewasa 18+.'
