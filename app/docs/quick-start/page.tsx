import DocPage, { docMetadata } from '@/components/docs/DocPage'

export const metadata = docMetadata('quick-start')

export default function Page() {
  return <DocPage slug="quick-start" />
}
