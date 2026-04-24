import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/pages')
const workshopsDirectory = path.join(process.cwd(), 'content/workshops')
const eventsDirectory = path.join(process.cwd(), 'content/events')
const galleryDirectory = path.join(process.cwd(), 'content/gallery')

export type GalleryItem = {
  title?: string
  image?: string
  description?: string
  caption?: string
  alt?: string
  location?: string
}

export type Event = {
  title?: string
  date?: string
  endDate?: string
  location?: string
  price?: number
  description?: string
  image?: string
  featured?: boolean
}

export type Workshop = {
  title?: string
  time?: string
  price?: string
  description?: string
  image?: string
  features?: string[]
  featured?: boolean
}

export type PageContent = {
  pageName?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: string
  heroCtaText?: string
  heroCtaLink?: string
  heroImage?: string
  galleryItems?: GalleryItem[]
  featured?: boolean
}

export function getPageContent(slug: string): PageContent | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return data as PageContent
  } catch {
    return null
  }
}

export function getHomePageContent() {
  return getPageContent('home')
}

export function getWorkshopContent(): Workshop[] {
  try {
    const files = fs.readdirSync(workshopsDirectory)
    return files
      .filter(f => f.endsWith('.md'))
      .map(f => {
        const fullPath = path.join(workshopsDirectory, f)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        return data as Workshop
      })
      .sort((a, b) => {
        if (a.title === 'Session Découverte') return -1
        if (b.title === 'Session Découverte') return 1
        if (a.title === 'Semaine Intensive') return 1
        if (b.title === 'Semaine Intensive') return -1
        return 0
      })
  } catch {
    return []
  }
}

export function getEventContent(): Event[] {
  try {
    const files = fs.readdirSync(eventsDirectory)
    return files
      .filter(f => f.endsWith('.md'))
      .map(f => {
        const fullPath = path.join(eventsDirectory, f)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        return data as Event
      })
      .sort((a, b) => {
        if (!a.date) return 1
        if (!b.date) return -1
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })
  } catch {
    return []
  }
}

export function getGalleryContent(): GalleryItem[] {
  try {
    const files = fs.readdirSync(galleryDirectory)
    return files
      .filter(f => f.endsWith('.md'))
      .map(f => {
        const fullPath = path.join(galleryDirectory, f)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        return data as GalleryItem
      })
  } catch {
    return []
  }
}