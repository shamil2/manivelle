import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/pages')

export type PageContent = {
  pageName?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: string
  heroCtaText?: string
  heroCtaLink?: string
  heroImage?: string
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