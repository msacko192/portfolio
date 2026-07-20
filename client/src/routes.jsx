import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import ServicePage from './pages/ServicePage'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import LocationPage from './pages/LocationPage'
import NotFound from './pages/NotFound'
import Confirmation from './pages/Confirmation'
import { services } from './data/services'
import { locations } from './data/locations'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:slug" element={<ProjectDetail />} />

        {/* Service pages */}
        {services.map((s) => (
          <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage />} />
        ))}

        {/* Blog */}
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Local SEO pages */}
        {locations.map((l) => (
          <Route
            key={l.slug}
            path={`/developpeur-applications-metier-${l.slug}`}
            element={<LocationPage />}
          />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
