import DocPage, { docMetadata } from '@/components/docs/DocPage'

export const metadata = docMetadata('release-notes')

export default function Page() {
  return <DocPage slug="release-notes" />
}
