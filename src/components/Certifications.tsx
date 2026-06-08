import { CERTIFICATIONS } from '../config/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section
      id="sertifikasi"
      className="relative border-y border-gold/10 bg-ink-800/50 py-20 sm:py-28"
    >
      <div className="section">
        <SectionHeading
          eyebrow="Legalitas & Mutu"
          title="Terjamin & Bersertifikat"
          subtitle="Kimo Ginseng diproduksi dengan standar keamanan dan kualitas yang diakui."
        />

        <ul className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal as="li" key={cert.label} delay={i * 70}>
              <div className="group flex h-full flex-col items-center justify-center rounded-2xl border border-gold/15 bg-ink-700/40 px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold-sm">
                {/* [GANTI] badge teks bisa diganti dengan logo resmi (img) bila tersedia */}
                <span className="grid h-16 w-16 place-items-center rounded-full border border-gold/30 bg-ink font-serif text-lg font-bold tracking-wide text-gold transition-colors duration-300 group-hover:bg-gold-gradient group-hover:text-ink">
                  {cert.label}
                </span>
                <span className="mt-4 text-xs text-cream-dim">{cert.desc}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
