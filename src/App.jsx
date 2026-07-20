import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import AppRoutes from './routes'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollProgress />
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </MotionConfig>
  )
}
