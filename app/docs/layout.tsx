import Navigation from '@/components/Navigation'
import DocsSidebar from '@/components/docs/DocsSidebar'
import MobileDocsNav from '@/components/docs/MobileDocsNav'
import DocsSearch from '@/components/docs/DocsSearch'
import { searchIndex } from '@/lib/docs/render'

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const index = await searchIndex()

  return (
    <>
      <Navigation />
      <div className="relative bg-white pt-16 dark:bg-black">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(60rem_20rem_at_50%_-4rem,rgba(139,92,246,0.14),transparent_70%)] dark:bg-[radial-gradient(60rem_22rem_at_50%_-4rem,rgba(139,92,246,0.22),transparent_70%)]"
        />
        <MobileDocsNav />
        <div className="relative mx-auto flex max-w-[90rem]">
          <DocsSidebar />
          <main id="main" className="min-w-0 flex-1 px-4 pt-8 sm:px-8 lg:px-12 lg:pt-12">
            {children}
          </main>
        </div>
      </div>
      <DocsSearch index={index} />
    </>
  )
}
