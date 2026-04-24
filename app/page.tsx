import { getHomePageContent } from '@/lib/content'
import HomeClient from './home-page'

export const revalidate = 60

export default function Home() {
  const content = getHomePageContent()
  return <HomeClient content={content} />
}