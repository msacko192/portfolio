import Hero from '../components/Hero'
import Problems from '../components/Problems'
import Solution from '../components/Solution'
import BeforeAfter from '../components/BeforeAfter'
import Projects from '../components/Projects'
import Pricing from '../components/Pricing'
import Method from '../components/Method'
import BlogPreview from '../components/BlogPreview'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problems />
      <Solution />
      <BeforeAfter />
      <Projects />
      <Pricing />
      <Method />
      <BlogPreview />
      <Contact />
    </main>
  )
}
