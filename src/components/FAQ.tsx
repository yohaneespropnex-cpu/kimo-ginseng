import { useState } from 'react'
import { FAQS } from '../config/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="section">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Belum menemukan jawaban? Hubungi kami langsung melalui WhatsApp."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={item.q} delay={i * 50}>
                <div
                  className={[
                    'overflow-hidden rounded-2xl border bg-ink-700/40 transition-colors duration-300',
                    isOpen ? 'border-gold/40' : 'border-gold/15',
                  ].join(' ')}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-base font-semibold text-cream sm:text-lg">
                        {item.q}
                      </span>
                      <Icon
                        name="chevron"
                        className={[
                          'h-5 w-5 shrink-0 text-gold transition-transform duration-300',
                          isOpen ? 'rotate-180' : '',
                        ].join(' ')}
                      />
                    </button>
                  </h3>
                  <div
                    className={[
                      'grid transition-all duration-300 ease-out',
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    ].join(' ')}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-cream-dim">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
