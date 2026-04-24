import { getEventContent } from '@/lib/content'
import AgendaView from './agenda-view'

export const revalidate = 60

export default function AgendaPage() {
  const events = getEventContent()
  return <AgendaView events={events} />
}