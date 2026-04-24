import { getWorkshopContent, type Workshop } from '@/lib/content'
import WorkshopsView from './workshops-view'

export const revalidate = 60

export default function WorkshopsPage() {
  const workshops = getWorkshopContent()
  return <WorkshopsView workshops={workshops} />
}