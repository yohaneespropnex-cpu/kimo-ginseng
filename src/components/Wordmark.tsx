/**
 * Wordmark Kimo Men — tipografi VEKTOR (bukan AI raster): tajam di segala
 * ukuran, huruf sempurna, ringan. Aksen tunas daun minimal di kiri.
 */
interface WordmarkProps {
  className?: string
  /** Ukuran teks (Tailwind text-*). Default untuk navbar. */
  textClass?: string
}

function LeafSprout({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 34" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="wm-gold" x1="4" y1="2" x2="28" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e6c878" />
          <stop offset="0.55" stopColor="#c9a24b" />
          <stop offset="1" stopColor="#a07d2e" />
        </linearGradient>
      </defs>
      {/* batang */}
      <path d="M16 33V17" stroke="url(#wm-gold)" strokeWidth="1.8" strokeLinecap="round" />
      {/* daun kiri */}
      <path d="M15.4 21.2c-4.6-.2-7.6-3.4-7.9-8.4 5 .3 8.3 2.7 8.6 6.6.1 1.5-.1 1.8-.7 1.8z" fill="url(#wm-gold)" fillOpacity="0.78" />
      {/* daun kanan (utama) */}
      <path d="M16.6 19c.3-5 3.8-8.2 9.1-8.6-.2 5.2-3.2 8.6-7.9 8.9-1 .1-1.3-.1-1.2-.3z" fill="url(#wm-gold)" />
    </svg>
  )
}

export default function Wordmark({
  className = '',
  textClass = 'text-xl sm:text-2xl',
}: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${className}`}>
      <LeafSprout className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
      <span
        className={`font-wordmark font-semibold uppercase leading-none tracking-[0.14em] text-cream ${textClass}`}
      >
        Kimo<span className="ml-[0.18em] text-gold">Men</span>
      </span>
    </span>
  )
}
