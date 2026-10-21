import DocPage, { docMetadata } from '@/components/docs/DocPage'

export const metadata = docMetadata('api/endpoints')

export default function Page() {
  return <DocPage slug="api/endpoints" />
}
