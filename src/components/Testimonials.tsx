import { TESTIMONIALS } from '../config/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section id="testimoni" className="relative py-20 sm:py-28">
      <div className="section">
        <SectionHeading
          eyebrow="Testimoni"
          title="Kisah dari Mereka yang Mempercayai"
          subtitle="Pengalaman pelanggan kami. Hasil dapat berbeda pada setiap orang."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-gold/15 bg-ink-700/40 p-7 transition-colors duration-300 hover:border-gold/40">
                <div className="flex text-gold" aria-label="Penilaian 5 dari 5 bintang">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon
                      key={s}
                      name="star"
                      className="h-4 w-4"
                      fill="currentColor"
                      stroke="none"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-cream">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-gold/10 pt-5">
                  {/* [GANTI] inisial bisa diganti foto pelanggan (dengan izin) */}
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-gradient font-serif font-bold text-ink">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-cream">
                      {t.name}
                    </span>
                    <span className="block text-xs text-cream-dim">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
