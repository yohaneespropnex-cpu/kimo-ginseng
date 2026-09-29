import { waLink } from '../config/site'
import Icon from './Icon'
import ResponsiveImage from './ResponsiveImage'

/*
 * Konten hero sengaja TIDAK memakai <Reveal>: elemen opacity-0 tidak dihitung
 * sebagai LCP oleh Chrome, jadi headline & foto harus langsung tampil di paint
 * pertama. Gerak cukup dari CSS (fade-up badge, float foto) tanpa menunggu JS.
 */

// React 18 belum mengetik `fetchpriority` huruf kecil; atribut HTML ini
// memberi tahu browser bahwa foto hero adalah prioritas unduh tertinggi.
const highPriority = { fetchpriority: 'high' } as Record<string, string>

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-radial-glow pt-28 sm:pt-32 lg:pt-40"
    >
      {/* Ornamen latar lembut — gold hangat + secangkir patina herbal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-patina/[0.07] blur-3xl"
      />

      <div className="section grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        {/* Kolom teks */}
        <div className="text-center lg:text-left">
          <span className="eyebrow justify-center lg:justify-start">
            <span className="gold-rule" />
            Suplemen Herbal Premium · 18+
          </span>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            Vitalitas & Stamina Pria,
            <span className="block bg-gold-gradient bg-clip-text text-transparent">
              Diracik dari Alam
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg lg:mx-0">
            Kimo Men memadukan{' '}
            <span className="text-cream">Ginseng Merah Korea</span> dan{' '}
            <span className="text-cream">Ashwagandha</span> pilihan untuk
            mendukung energi, performa, dan keharmonisan keluarga — dengan
            kualitas premium yang terpercaya.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Pesan via WhatsApp
            </a>
            <a href="#manfaat" className="btn-outline w-full sm:w-auto">
              Pelajari Manfaat
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          {/* Badge kepercayaan */}
          <div className="animate-fade-up [animation-delay:200ms]">
            <div className="mt-9 max-w-md">
              <div className="hairline mx-auto lg:mx-0" />
            </div>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              {[
                { label: 'Terdaftar BPOM', icon: 'shield' as const },
                { label: 'Halal MUI', icon: 'check' as const },
                { label: '100% Herbal', icon: 'leaf' as const },
              ].map((b) => (
                <li
                  key={b.label}
                  className="flex items-center gap-2 text-sm text-cream-dim"
                >
                  <Icon name={b.icon} className="h-5 w-5 text-gold" />
                  {b.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kolom gambar produk */}
        <div className="relative">
          <div className="relative mx-auto max-w-md">
            {/* Lingkaran cahaya di belakang produk */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 m-auto h-72 w-72 rounded-full bg-gold/20 blur-3xl sm:h-80 sm:w-80"
            />
            <div className="relative rounded-card border border-gold/20 bg-gradient-to-b from-ink-700 to-ink-800 p-6 shadow-gold">
              {/* Foto produk (AI-generated). [GANTI] dengan foto produk asli bila sudah ada
                  — ganti product.jpg lalu buat ulang varian product-{480,720,864}.webp */}
              <ResponsiveImage
                base="./images/product"
                widths={[480, 720, 864]}
                width={864}
                height={1184}
                sizes="(min-width: 640px) 400px, calc(100vw - 88px)"
                alt="Kemasan produk Kimo Men — suplemen herbal Ginseng Merah Korea dan Ashwagandha"
                loading="eager"
                className="mx-auto w-full animate-float drop-shadow-2xl"
                {...highPriority}
              />
            </div>

            {/* Kartu rating mengambang */}
            <div className="absolute -bottom-5 -left-3 flex animate-fade-up items-center gap-3 rounded-card border border-gold/20 bg-ink-700/90 px-4 py-3 shadow-gold-sm backdrop-blur [animation-delay:350ms] sm:-left-6">
              <div className="flex text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    className="h-4 w-4"
                    fill="currentColor"
                    stroke="none"
                  />
                ))}
              </div>
              <div className="text-xs leading-tight text-cream-dim">
                <span className="block font-semibold text-cream">
                  Dipercaya pria dewasa
                </span>
                di seluruh Indonesia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
