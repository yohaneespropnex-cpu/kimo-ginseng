import { STEPS } from '../config/content'
import { HEALTH_DISCLAIMER } from '../config/site'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function HowToUse() {
  return (
    <section id="cara-pakai" className="relative py-20 sm:py-28">
      <div className="section">
        <SectionHeading
          eyebrow="Cara Pakai"
          title="Praktis dalam 4 Langkah"
          subtitle="Mudah dikonsumsi kapan saja. Ikuti panduan berikut untuk hasil yang optimal."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 80}>
              <div className="relative h-full rounded-2xl border border-gold/15 bg-ink-700/40 p-7 transition-colors duration-300 hover:border-gold/40">
                <span className="font-serif text-5xl font-semibold text-gold/30">
                  {String(step.number).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-dim">
                  {step.desc}
                </p>
                {/* Konektor garis antar langkah (desktop) */}
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-gold/30 lg:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Catatan penting */}
        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-gold/15 bg-gold/5 px-6 py-4 text-center text-sm leading-relaxed text-cream-dim">
            {HEALTH_DISCLAIMER}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
