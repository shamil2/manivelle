import { NextRequest, NextResponse } from 'next/server'

const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID!
const GITHUB_OAUTH_BASE_URL = 'https://github.com'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const params = new URLSearchParams({
    client_id: OAUTH_CLIENT_ID,
    scope: 'repo',
    state: crypto.randomUUID(),
    redirect_uri: `${url.origin}/api/auth/callback`,
  })

  return NextResponse.redirect(`${GITHUB_OAUTH_BASE_URL}/login/oauth/authorize?${params.toString()}`)
}