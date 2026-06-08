import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
  center?: boolean
}

/** Judul section yang konsisten: eyebrow kecil + judul serif + subjudul. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className={`eyebrow ${center ? 'justify-center' : ''}`}>
        <span className="gold-rule" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold text-cream sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-cream-dim sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
