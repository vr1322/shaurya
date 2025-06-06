import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ServicesSection from "./components/ServicesSection"
import TestimonialsSection from "./components/TestimonialsSection"
import ContactSection from "./components/ContactSection"
import FloatingQuoteButton from "./components/FloatingQuoteButton"

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingQuoteButton />
    </main>
  )
}
