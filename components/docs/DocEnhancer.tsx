'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const COPY_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
const DONE_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'

/**
 * Adds copy buttons to code blocks and keeps links between docs pages on
 * client-side navigation. The article itself is static HTML.
 */
export default function DocEnhancer({ containerId }: { containerId: string }) {
  const router = useRouter()

  useEffect(() => {
    const root = document.getElementById(containerId)
    if (!root) return

    root.querySelectorAll<HTMLElement>('figure[data-rehype-pretty-code-figure] > pre, .docs-prose > pre').forEach((pre) => {
      if (pre.parentElement?.querySelector(':scope > .copy-code')) return
      const holder = pre.parentElement?.tagName === 'FIGURE' ? pre.parentElement : pre
      holder.classList.add('has-copy')
      const btn = document.createElement('button')
      btn.type = 'button'
      btn.className = 'copy-code'
      btn.setAttribute('aria-label', 'Copy code')
      btn.innerHTML = COPY_ICON
      btn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(pre.innerText.replace(/\n$/, ''))
          btn.innerHTML = DONE_ICON
          btn.dataset.copied = 'true'
          setTimeout(() => {
            btn.innerHTML = COPY_ICON
            delete btn.dataset.copied
          }, 1600)
        } catch {
          /* clipboard blocked */
        }
      })
      holder.appendChild(btn)
    })

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as HTMLElement).closest('a')
      const href = a?.getAttribute('href')
      if (!a || !href || a.target === '_blank' || !href.startsWith('/')) return
      e.preventDefault()
      router.push(href)
    }
    root.addEventListener('click', onClick)
    return () => root.removeEventListener('click', onClick)
  }, [containerId, router])

  return null
}
