import { BENEFITS } from '../config/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Benefits() {
  return (
    <section id="manfaat" className="relative py-20 sm:py-28">
      <div className="section">
        <SectionHeading
          eyebrow="Manfaat Utama"
          title="Dukungan Menyeluruh untuk Pria Dewasa"
          subtitle="Diformulasikan untuk membantu menjaga energi, performa, dan ketenangan — agar Anda tetap prima setiap hari."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal as="li" key={benefit.title} delay={i * 70}>
              <article className="group h-full rounded-2xl border border-gold/15 bg-ink-700/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-ink-700/70 hover:shadow-gold-sm">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold-gradient group-hover:text-ink">
                  <Icon name={benefit.icon as never} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-cream">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream-dim">
                  {benefit.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
