import { getHomePageContent } from '@/lib/content'
import HomeClient from './home-page'

export default function Home() {
  const content = getHomePageContent()
  return <HomeClient content={content} />
}