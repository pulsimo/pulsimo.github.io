import type { MetadataRoute } from 'next'
import { readdirSync, statSync } from 'fs'
import path from 'path'
import { DOC_REDIRECTS } from '@/lib/docs/manifest'

export const dynamic = 'force-static'

const SITE = 'https://pulsimo.github.io'

// Every app/**/page.tsx becomes a URL (the export uses trailing slashes)
function collectRoutes(dir: string, route = ''): string[] {
  const routes: string[] = []
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry)
    if (statSync(full).isDirectory()) routes.push(...collectRoutes(full, `${route}/${entry}`))
    else if (entry === 'page.tsx') routes.push(route)
  }
  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  return collectRoutes(path.join(process.cwd(), 'app'))
    // pages that only forward to their new address
    .filter((route) => route !== '/documentation' && !(route.replace(/^\/docs\//, '') in DOC_REDIRECTS))
    .sort()
    .map((route) => ({
      url: `${SITE}${route}/`.replace(/\/\/$/, '/'),
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : route.split('/').length === 2 ? 0.8 : 0.6,
    }))
}
