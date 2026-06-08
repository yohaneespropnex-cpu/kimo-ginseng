import { useEffect, useState } from 'react'
import { waLink } from '../config/site'
import Icon from './Icon'

/** Tombol WhatsApp melayang di pojok kanan bawah. Muncul setelah scroll. */
export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pesan via WhatsApp"
      className={[
        'fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-3.5 text-ink shadow-gold transition-all duration-300',
        'hover:-translate-y-0.5 hover:brightness-110',
        show
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0',
      ].join(' ')}
    >
      <span className="relative flex">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/20" />
        <Icon name="whatsapp" className="h-6 w-6" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Pesan Sekarang</span>
    </a>
  )
}
