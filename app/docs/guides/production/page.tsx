import DocPage, { docMetadata } from '@/components/docs/DocPage'

export const metadata = docMetadata('guides/production')

export default function Page() {
  return <DocPage slug="guides/production" />
}
