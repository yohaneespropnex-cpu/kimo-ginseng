import type { ImgHTMLAttributes } from 'react'

interface ResponsiveImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> {
  /** Path tanpa ekstensi, mis. './images/product'. Butuh file `${base}.jpg`
   *  (fallback) dan `${base}-${w}.webp` untuk tiap lebar di `widths`. */
  base: string
  widths: number[]
  /** Dimensi ASLI file .jpg — menentukan rasio yang dipesan browser (anti-CLS). */
  width: number
  height: number
  sizes: string
  alt: string
}

/**
 * <picture> dengan WebP responsif + fallback JPG. Browser memilih lebar yang
 * paling pas untuk layar & DPR, jadi HP tidak mengunduh foto ukuran desktop.
 * Varian dibuat dengan: python3 (Pillow) → `${base}-${w}.webp`.
 */
export default function ResponsiveImage({
  base,
  widths,
  width,
  height,
  sizes,
  alt,
  loading = 'lazy',
  decoding = 'async',
  ...rest
}: ResponsiveImageProps) {
  const srcSet = widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')
  return (
    <picture>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={`${base}.jpg`}
        width={width}
        height={height}
        alt={alt}
        loading={loading}
        decoding={decoding}
        {...rest}
      />
    </picture>
  )
}
