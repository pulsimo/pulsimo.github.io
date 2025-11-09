import Navigation from '@/components/Navigation'
import ThemeToggle from '@/components/ThemeToggle'
import DocsSidebar from '@/components/docs/DocsSidebar'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <ThemeToggle />
      <div className="flex pt-16">
        <DocsSidebar />
        <main className="flex-1 max-w-5xl mx-auto px-8 py-12">
          {children}
        </main>
      </div>
    </>
  )
}
