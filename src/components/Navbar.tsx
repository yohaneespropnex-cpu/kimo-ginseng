import { useEffect, useState } from 'react'
import { waLink } from '../config/site'
import Icon from './Icon'

const NAV_LINKS = [
  { href: '#manfaat', label: 'Manfaat' },
  { href: '#kandungan', label: 'Kandungan' },
  { href: '#cara-pakai', label: 'Cara Pakai' },
  { href: '#sertifikasi', label: 'Sertifikasi' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-gold/15 bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <nav className="section flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <a
          href="#beranda"
          className="flex items-center gap-2.5 font-serif text-xl font-semibold tracking-wide text-cream sm:text-2xl"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-gradient text-ink shadow-gold-sm">
            <Icon name="leaf" className="h-5 w-5" />
          </span>
          <span>
            Kimo <span className="text-gold">Ginseng</span>
          </span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-cream-dim transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold hidden lg:inline-flex"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Pesan via WhatsApp
        </a>

        {/* Tombol menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-gold lg:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </nav>

      {/* Panel menu mobile */}
      <div
        className={[
          'overflow-hidden border-t border-gold/10 bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden',
          open ? 'max-h-96' : 'max-h-0',
        ].join(' ')}
      >
        <ul className="section flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base text-cream-dim transition-colors hover:bg-gold/10 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-gold w-full"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Pesan via WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
