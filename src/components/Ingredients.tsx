import { INGREDIENTS } from '../config/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Ingredients() {
  return (
    <section
      id="kandungan"
      className="relative border-y border-gold/10 bg-ink-800/50 py-20 sm:py-28"
    >
      <div className="section">
        <SectionHeading
          eyebrow="Kandungan Premium"
          title="Dua Herbal Legendaris dalam Satu Formula"
          subtitle="Perpaduan kekuatan timur — Ginseng Merah Korea dan Ashwagandha India — yang dipilih dengan standar mutu tinggi."
        />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {INGREDIENTS.map((ing, i) => {
            const reversed = i % 2 === 1
            return (
              <div
                key={ing.name}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                {/* Gambar */}
                <Reveal
                  className={reversed ? 'lg:order-2' : ''}
                >
                  <div className="relative mx-auto max-w-md">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 m-auto h-60 w-60 rounded-full bg-gold/15 blur-3xl"
                    />
                    <div className="overflow-hidden rounded-3xl border border-gold/20 bg-ink-700 shadow-gold-sm">
                      {/* [GANTI] Ganti dengan foto asli bahan ini */}
                      <img
                        src={ing.image}
                        alt={`${ing.name} dari ${ing.origin}`}
                        width={480}
                        height={360}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </Reveal>

                {/* Teks */}
                <Reveal delay={120} className={reversed ? 'lg:order-1' : ''}>
                  <span className="eyebrow">{ing.origin}</span>
                  <h3 className="mt-3 text-2xl font-semibold text-cream sm:text-3xl">
                    {ing.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-cream-dim">
                    {ing.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {ing.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm text-cream"
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
