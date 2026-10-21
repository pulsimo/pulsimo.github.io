import DocPage, { docMetadata } from '@/components/docs/DocPage'

export const metadata = docMetadata('first-project')

export default function Page() {
  return <DocPage slug="first-project" />
}
