import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID!
const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET!
const GITHUB_OAUTH_BASE_URL = 'https://github.com'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const originalUrl = url.searchParams.get('redirect_url') || '/admin/'

  if (!code) {
    return NextResponse.redirect(new URL('/admin/', url.origin))
  }

  const tokenResponse = await fetch(
    `${GITHUB_OAUTH_BASE_URL}/login/oauth/access_token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        code,
      }),
    }
  )

  const tokenData = await tokenResponse.json()

  if (tokenData.access_token) {
    const cookieStore = await cookies()
    cookieStore.set('decap_oauth_token', tokenData.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
  }

  return NextResponse.redirect(new URL(originalUrl, url.origin))
}