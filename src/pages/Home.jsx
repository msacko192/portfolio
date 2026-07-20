import Hero from '../components/Hero'
import BeforeAfter from '../components/BeforeAfter'
import Problems from '../components/Problems'
import Solution from '../components/Solution'
import Comparison from '../components/Comparison'
import Pricing from '../components/Pricing'
import Projects from '../components/Projects'
import Sectors from '../components/Sectors'
import Method from '../components/Method'
import Technologies from '../components/Technologies'
import BlogPreview from '../components/BlogPreview'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <BeforeAfter />
      <Problems />
      <Solution />
      <Comparison />
      <Pricing />
      <Projects />
      <Sectors />
      <Method />
      <Technologies />
      <BlogPreview />
      <Contact />
    </main>
  )
}
