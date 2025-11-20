import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // For now, we'll allow access to admin routes
    // In a real application, you would check for authentication here
    // Example: Check for admin token/session
    
    const isAuthenticated = true // Replace with actual auth check
    const isAdmin = true // Replace with actual admin check
    
    if (!isAuthenticated || !isAdmin) {
      // Redirect to login if not authenticated or not admin
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*'
  ]
}