import Hero from '../components/Hero'
import TrustPhrase from '../components/TrustPhrase'
import Problems from '../components/Problems'
import SoftwareShowcase from '../components/SoftwareShowcase'
import Projects from '../components/Projects'
import Method from '../components/Method'
import WhyCustom from '../components/WhyCustom'
import FAQ from '../components/FAQ'
import CTAFinal from '../components/CTAFinal'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustPhrase />
      <Problems />
      <SoftwareShowcase />
      <Projects />
      <Method />
      <WhyCustom />
      <FAQ />
      <CTAFinal />
      <Contact />
    </main>
  )
}
