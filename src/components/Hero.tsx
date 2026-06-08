import { waLink } from '../config/site'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-radial-glow pt-28 sm:pt-32 lg:pt-40"
    >
      {/* Ornamen latar lembut */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="section grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        {/* Kolom teks */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="eyebrow justify-center lg:justify-start">
              <span className="gold-rule" />
              Suplemen Herbal Premium · 18+
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
              Vitalitas & Stamina Pria,
              <span className="block bg-gold-gradient bg-clip-text text-transparent">
                Diracik dari Alam
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg lg:mx-0">
              Kimo Ginseng memadukan{' '}
              <span className="text-cream">Ginseng Merah Korea</span> dan{' '}
              <span className="text-cream">Ashwagandha</span> pilihan untuk
              mendukung energi, performa, dan keharmonisan keluarga — dengan
              kualitas premium yang terpercaya.
            </p>
          </Reveal>

          <Reveal delay={240}>
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
          </Reveal>

          {/* Badge kepercayaan */}
          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              {[
                { label: 'Terdaftar BPOM', icon: 'shield' as const },
                { label: 'Halal MUI', icon: 'check' as const },
                { label: '100% Herbal', icon: 'leaf' as const },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 text-sm text-cream-dim"
                >
                  <Icon name={b.icon} className="h-5 w-5 text-gold" />
                  {b.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Kolom gambar produk */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md">
            {/* Lingkaran cahaya di belakang produk */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 m-auto h-72 w-72 rounded-full bg-gold/20 blur-3xl sm:h-80 sm:w-80"
            />
            <div className="relative rounded-[2rem] border border-gold/20 bg-gradient-to-b from-ink-700 to-ink-800 p-6 shadow-gold">
              {/* Foto produk (AI-generated). [GANTI] dengan foto produk asli bila sudah ada */}
              <img
                src="./images/product.jpg"
                alt="Kemasan produk Kimo Ginseng — suplemen herbal Ginseng Merah Korea dan Ashwagandha"
                width={520}
                height={620}
                className="mx-auto w-full animate-float drop-shadow-2xl"
              />
            </div>

            {/* Kartu rating mengambang */}
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-gold/20 bg-ink-700/90 px-4 py-3 shadow-gold-sm backdrop-blur sm:-left-6">
              <div className="flex text-gold">
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
        </Reveal>
      </div>
    </section>
  )
}
