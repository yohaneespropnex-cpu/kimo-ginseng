/**
 * ============================================================================
 *  KONTEN SECTION — KIMO GINSENG
 * ============================================================================
 *  Edit teks manfaat, kandungan, langkah, testimoni, dan FAQ di sini.
 *  Untuk mengganti FOTO, lihat folder /public/images dan ganti file dengan
 *  nama yang sama (atau ubah path di bawah).
 * ============================================================================
 */

export interface Benefit {
  icon: string // nama ikon (lihat src/components/Icon.tsx)
  title: string
  desc: string
}

export const BENEFITS: Benefit[] = [
  {
    icon: 'bolt',
    title: 'Stamina & Energi',
    desc: 'Dukung energi harian dan kebugaran agar tetap prima menjalani aktivitas.',
  },
  {
    icon: 'flame',
    title: 'Performa Lebih Tahan Lama',
    desc: 'Bantu jaga vitalitas dan ketahanan untuk kualitas keintiman yang lebih baik.',
  },
  {
    icon: 'leaf',
    title: 'Bantu Kelola Stres',
    desc: 'Ashwagandha dikenal membantu tubuh beradaptasi terhadap stres dan menjaga ketenangan.',
  },
  {
    icon: 'sprout',
    title: 'Bahan Alami',
    desc: 'Diracik dari Ginseng Merah Korea dan Ashwagandha pilihan tanpa bahan berbahaya.',
  },
  {
    icon: 'heart',
    title: 'Keharmonisan Keluarga',
    desc: 'Vitalitas yang terjaga turut mendukung kehangatan dan keharmonisan rumah tangga.',
  },
  {
    icon: 'shield',
    title: 'Aman & Terdaftar',
    desc: 'Terdaftar BPOM serta bersertifikat Halal MUI, ISO, GMP, dan HACCP.',
  },
]

export interface Ingredient {
  name: string
  origin: string
  image: string
  desc: string
  points: string[]
}

export const INGREDIENTS: Ingredient[] = [
  {
    name: 'Ginseng Merah Korea',
    origin: 'Korea Selatan',
    // [GANTI] dengan foto asli ginseng merah korea
    image: './images/ginseng.svg',
    desc: 'Akar ginseng merah yang melalui proses pemanasan khusus, dikenal selama berabad-abad sebagai tonik vitalitas. Kaya akan ginsenosida yang mendukung energi dan stamina pria.',
    points: [
      'Mendukung energi & stamina',
      'Membantu menjaga vitalitas',
      'Antioksidan alami',
    ],
  },
  {
    name: 'Ashwagandha',
    origin: 'India',
    // [GANTI] dengan foto asli ashwagandha
    image: './images/ashwagandha.svg',
    desc: 'Herbal adaptogen ternama dalam tradisi Ayurveda. Ashwagandha membantu tubuh mengelola stres, menjaga ketenangan, serta mendukung keseimbangan hormon dan vitalitas.',
    points: [
      'Adaptogen pengelola stres',
      'Mendukung ketenangan & fokus',
      'Membantu menjaga vitalitas pria',
    ],
  },
]

export interface Step {
  number: number
  title: string
  desc: string
}

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'Siapkan',
    desc: 'Larutkan dalam ±50 ml air putih, atau letakkan langsung di bawah lidah hingga larut.',
  },
  {
    number: 2,
    title: 'Konsumsi',
    desc: 'Minum 2–3 jam sebelum berhubungan untuk hasil yang optimal.',
  },
  {
    number: 3,
    title: 'Perbanyak Air Putih',
    desc: 'Dukung penyerapan dengan memperbanyak konsumsi air putih sepanjang hari.',
  },
  {
    number: 4,
    title: 'Hindari Pantangan',
    desc: 'Jangan konsumsi bersama kopi, alkohol, atau obat-obatan tertentu.',
  },
]

export interface Certification {
  label: string
  desc: string
}

export const CERTIFICATIONS: Certification[] = [
  { label: 'BPOM', desc: 'Terdaftar resmi' },
  { label: 'HALAL', desc: 'Sertifikat MUI' },
  { label: 'ISO', desc: 'Standar mutu' },
  { label: 'GMP', desc: 'Good Manufacturing Practice' },
  { label: 'HACCP', desc: 'Keamanan pangan' },
]

export interface Testimonial {
  name: string
  role: string
  quote: string
  initials: string
}

// [GANTI] dengan testimoni asli pelanggan (dengan izin mereka).
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Budi S.',
    role: 'Pengusaha, 41 tahun',
    initials: 'BS',
    quote:
      'Setelah rutin konsumsi, badan terasa lebih bertenaga dan tidak gampang lelah. Cara pakainya juga praktis.',
  },
  {
    name: 'Andi P.',
    role: 'Karyawan, 38 tahun',
    initials: 'AP',
    quote:
      'Saya suka karena bahannya herbal dan sudah BPOM serta halal. Stamina lebih terjaga untuk keluarga.',
  },
  {
    name: 'Hendra W.',
    role: 'Wiraswasta, 45 tahun',
    initials: 'HW',
    quote:
      'Kualitas premium terasa dari kemasannya. Lebih percaya diri dan rumah tangga makin harmonis.',
  },
]

export interface FAQItem {
  q: string
  a: string
}

export const FAQS: FAQItem[] = [
  {
    q: 'Apakah Kimo Ginseng aman dikonsumsi?',
    a: 'Kimo Ginseng adalah suplemen herbal yang terdaftar BPOM dan bersertifikat Halal MUI, ISO, GMP, serta HACCP. Meski demikian, ini adalah suplemen — bukan obat. Konsultasikan dengan tenaga kesehatan terlebih dahulu, terutama bila Anda memiliki kondisi medis tertentu.',
  },
  {
    q: 'Bagaimana cara konsumsi yang benar?',
    a: 'Larutkan dalam ±50 ml air lalu diminum, atau letakkan di bawah lidah hingga larut. Sebaiknya dikonsumsi 2–3 jam sebelum berhubungan dan perbanyak minum air putih.',
  },
  {
    q: 'Apa yang harus dihindari saat mengonsumsi?',
    a: 'Hindari mengonsumsi bersamaan dengan kopi, alkohol, atau obat-obatan tertentu. Jika sedang menjalani pengobatan, konsultasikan dahulu dengan dokter Anda.',
  },
  {
    q: 'Bagaimana cara memesan?',
    a: 'Pemesanan paling mudah melalui WhatsApp. Klik tombol "Pesan via WhatsApp" di halaman ini, dan tim kami akan membantu proses pemesanan serta pengiriman.',
  },
  {
    q: 'Apakah produk ini hanya untuk dewasa?',
    a: 'Ya. Kimo Ginseng diperuntukkan khusus bagi pria dewasa berusia 18 tahun ke atas.',
  },
]
