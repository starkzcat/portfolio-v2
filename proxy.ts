import { NextRequest, NextResponse } from 'next/server'
 
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/about') {
    return NextResponse.redirect(new URL('/', request.url))
  }
 
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/about/:path*', '/news/:path*'],
}