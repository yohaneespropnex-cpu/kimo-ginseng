import { waLink } from '../config/site'
import Icon from './Icon'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section id="pesan" className="relative py-20 sm:py-28">
      <div className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-ink-700 via-ink-800 to-ink px-6 py-14 text-center shadow-gold sm:px-12 sm:py-20">
            {/* Cahaya dekoratif */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
            />

            <span className="eyebrow justify-center">
              <span className="gold-rule" />
              Mulai Hari Ini
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold text-cream sm:text-4xl lg:text-5xl">
              Investasikan pada Vitalitas &amp; Keharmonisan Anda
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-dim sm:text-lg">
              Pesan Kimo Ginseng langsung melalui WhatsApp. Tim kami siap
              membantu Anda dengan ramah dan terpercaya.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Pesan via WhatsApp Sekarang
              </a>
              <a href="#kandungan" className="btn-outline w-full sm:w-auto">
                Lihat Kandungan
              </a>
            </div>

            <p className="mt-6 text-xs text-cream-dim">
              Khusus dewasa 18+ · Suplemen herbal, bukan obat
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
