import Redirect from '@/components/docs/Redirect'

export const metadata = { title: 'Moved', robots: { index: false } }

export default function Page() {
  return <Redirect to="/docs/features/alerts/#email-setup" />
}
