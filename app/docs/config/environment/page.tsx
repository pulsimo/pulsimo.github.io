import DocPage, { docMetadata } from '@/components/docs/DocPage'

export const metadata = docMetadata('config/environment')

export default function Page() {
  return <DocPage slug="config/environment" />
}
