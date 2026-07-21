import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { MotionConfig } from 'framer-motion'
import AppRoutes from './routes'
import ScrollProgress from './components/ScrollProgress'

export function render(url) {
  return renderToString(
    <MotionConfig reducedMotion="user">
      <StaticRouter location={url}>
        <ScrollProgress />
        <AppRoutes />
      </StaticRouter>
    </MotionConfig>
  )
}
