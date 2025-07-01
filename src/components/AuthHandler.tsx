'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthHandler() {
  const router = useRouter();

  useEffect(() => {
    const handleHashBasedAuth = async () => {
      try {
        // Check if we have a hash in the URL
        if (window.location.hash) {
          console.log('Hash detected:', window.location.hash);
          const hashParams = new URLSearchParams(
            window.location.hash.substring(1) // Remove the # character
          );

          // Check for errors first
          const error = hashParams.get('error');
          const errorDescription = hashParams.get('error_description');
          
          if (error) {
            console.error('Auth error:', error, errorDescription);
            // If the link is expired, redirect to login with an error message
            if (hashParams.get('error_code') === 'otp_expired') {
              router.push('/login?error=' + encodeURIComponent('The invite link has expired. Please request a new invite.'));
              return;
            }
            router.push('/login');
            return;
          }

          const access_token = hashParams.get('access_token');
          const refresh_token = hashParams.get('refresh_token');
          const type = hashParams.get('type');

          console.log('Auth type:', type);
          console.log('Has access token:', !!access_token);

          if (access_token) {
            // Set the session
            const { data: { session }, error } = await supabase.auth.setSession({
              access_token,
              refresh_token: refresh_token || '',
            });

            if (error) {
              console.error('Error setting session:', error);
              router.push('/login');
              return;
            }

            console.log('Session established:', !!session);
            console.log('User last sign in:', session?.user?.last_sign_in_at);

            // For invite flow or first-time users
            if (type === 'invite' || !session?.user?.last_sign_in_at) {
              console.log('Redirecting to password setup');
              router.push('/auth/setup-password');
            } else {
              console.log('Redirecting to admin posts');
              router.push('/admin/posts');
            }
          }
        }
      } catch (error) {
        console.error('Auth error:', error);
        router.push('/login');
      }
    };

    handleHashBasedAuth();
  }, []); // Remove router from dependencies to prevent multiple redirects

  return null;
} 