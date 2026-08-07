import type { SVGProps } from 'react'

/**
 * Logo bespoke Kimo Men — monogram "K" yang menyatu dengan tunas ginseng
 * di dalam segel (seal) emas. Vektor murni: tajam di segala ukuran, ringan,
 * dan mengikuti warna emas brand. Bukan ikon daun generik.
 */
export default function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="km-gold" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e6c878" />
          <stop offset="0.5" stopColor="#c9a24b" />
          <stop offset="1" stopColor="#a07d2e" />
        </linearGradient>
        <linearGradient id="km-lacquer" x1="24" y1="2" x2="24" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1c1810" />
          <stop offset="1" stopColor="#0b0a08" />
        </linearGradient>
      </defs>

      {/* Segel: tile lacquer + cincin emas tipis */}
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#km-lacquer)" />
      <rect x="2.75" y="2.75" width="42.5" height="42.5" rx="12.25" stroke="url(#km-gold)" strokeOpacity="0.5" strokeWidth="1.1" />

      {/* Monogram K */}
      <g stroke="url(#km-gold)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 13.5V34.5" />
        <path d="M17 24.2L27.5 34.5" />
      </g>

      {/* Lengan atas = tunas ginseng (batang + 2 daun + biji) */}
      <path d="M17 24.2L29.5 13.2" stroke="url(#km-gold)" strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M25.4 16.8c1.6-2.6 4.2-3.4 6.8-3.1-.2 2.6-1.6 4.7-4.2 5.2-1.4.3-2 .1-2.6-2.1z"
        fill="url(#km-gold)"
      />
      <path
        d="M22.2 19.9c-2.1-1-3.2-2.9-3.4-5.4 2.5.1 4.6 1.1 5.3 3.5.4 1.3.2 1.9-1.9 1.9z"
        fill="url(#km-gold)"
        fillOpacity="0.72"
      />
      <circle cx="31" cy="12" r="1.5" fill="#e6c878" />
    </svg>
  )
}
