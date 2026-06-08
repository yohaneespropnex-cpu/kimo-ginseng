import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Ingredients from './components/Ingredients'
import HowToUse from './components/HowToUse'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      {/* Lewati ke konten — aksesibilitas keyboard */}
      <a
        href="#manfaat"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Lewati ke konten
      </a>

      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Ingredients />
        <HowToUse />
        <Certifications />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
