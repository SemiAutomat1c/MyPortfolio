import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') ?? '/admin/posts';

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    const { data: { session }, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);

    if (sessionError) {
      console.error('Session error:', sessionError);
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Check if this is a new user (no last_sign_in_at means first time)
    if (!session?.user?.last_sign_in_at) {
      return NextResponse.redirect(new URL('/auth/setup-password', request.url));
    }
  }

  // For regular sign-ins or if something went wrong, redirect to the admin dashboard
  return NextResponse.redirect(new URL(next, request.url));
} 