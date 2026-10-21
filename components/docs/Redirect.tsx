'use client'

import { useEffect } from 'react'
import Link from 'next/link'

/** For addresses that moved. A static site can't answer with a 301, so the page forwards itself. */
export default function Redirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return (
    <div className="py-24 text-center">
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <p className="text-slate-600 dark:text-slate-400">
        This page has moved to{' '}
        <Link href={to} className="font-medium text-violet-600 underline-offset-4 hover:underline dark:text-violet-400">
          {to}
        </Link>
        .
      </p>
    </div>
  )
}
