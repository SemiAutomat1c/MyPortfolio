import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Refresh session if expired - required for Server Components
  const { data: { session }, error } = await supabase.auth.getSession();

  // Handle authentication errors
  if (error) {
    console.error('Auth error in middleware:', error);
    // If there's an auth error on admin routes, redirect to login
    if (req.nextUrl.pathname.startsWith('/admin')) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = '/login';
      redirectUrl.searchParams.set('error', 'Session expired. Please login again.');
      return NextResponse.redirect(redirectUrl);
    }
    return res;
  }

  // Allow access to auth-related paths
  if (req.nextUrl.pathname.startsWith('/auth/')) {
    return res;
  }

  // If user is not signed in and the current path starts with /admin
  if (!session && req.nextUrl.pathname.startsWith('/admin')) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/login';
    redirectUrl.searchParams.set('error', 'Please login to access admin area.');
    return NextResponse.redirect(redirectUrl);
  }

  // If user is signed in and the current path is /login
  if (session && req.nextUrl.pathname === '/login') {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/admin/posts';
    return NextResponse.redirect(redirectUrl);
  }

  // Update response with new session
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}; 