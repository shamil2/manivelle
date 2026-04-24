import { getGalleryContent } from '@/lib/content'
import GalleryView from './gallery-view'

export const revalidate = 60

export default function GalleryPage() {
  const gallery = getGalleryContent()
  return <GalleryView gallery={gallery} />
}