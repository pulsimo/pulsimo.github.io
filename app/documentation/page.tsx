import Navigation from '@/components/Navigation'
import Redirect from '@/components/docs/Redirect'

export const metadata = { title: 'Moved', robots: { index: false } }

export default function DocumentationPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-[60vh] bg-white pt-16 dark:bg-black">
        <Redirect to="/docs/" />
      </main>
    </>
  )
}
