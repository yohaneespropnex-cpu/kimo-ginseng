import { HEALTH_DISCLAIMER, SITE, waLink } from '../config/site'
import Icon from './Icon'

const NAV = [
  { href: '#manfaat', label: 'Manfaat' },
  { href: '#kandungan', label: 'Kandungan' },
  { href: '#cara-pakai', label: 'Cara Pakai' },
  { href: '#sertifikasi', label: 'Sertifikasi' },
  { href: '#faq', label: 'FAQ' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 bg-ink-800">
      <div className="section py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#beranda"
              className="flex items-center gap-2.5 font-serif text-xl font-semibold text-cream"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-gradient text-ink">
                <Icon name="leaf" className="h-5 w-5" />
              </span>
              Kimo <span className="text-gold">Ginseng</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-dim">
              Suplemen herbal premium dari Ginseng Merah Korea &amp; Ashwagandha
              untuk mendukung vitalitas, stamina, dan keharmonisan keluarga
              Indonesia.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 px-3 py-1 text-xs font-semibold text-gold">
              Khusus Dewasa 18+
            </span>
          </div>

          {/* Navigasi */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream-dim transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Kontak
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-cream-dim transition-colors hover:text-gold"
                >
                  <Icon name="whatsapp" className="h-4 w-4 text-gold" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-sm text-cream-dim transition-colors hover:text-gold"
                >
                  <Icon name="mail" className="h-4 w-4 text-gold" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-cream-dim transition-colors hover:text-gold"
                >
                  <Icon name="instagram" className="h-4 w-4 text-gold" />
                  @{SITE.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer kesehatan */}
        <div className="mt-12 rounded-2xl border border-gold/15 bg-ink-700/40 p-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gold">
            Disclaimer Kesehatan
          </h4>
          <p className="mt-2 text-xs leading-relaxed text-cream-dim">
            {HEALTH_DISCLAIMER}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gold/10 pt-6 text-center text-xs text-cream-dim sm:flex-row sm:text-left">
          <p>
            © {SITE.year} {SITE.legalName}. Seluruh hak cipta dilindungi.
          </p>
          <p>
            {SITE.company} · {SITE.address}
          </p>
        </div>
      </div>
    </footer>
  )
}
