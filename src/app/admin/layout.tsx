'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/lib/AuthContext';
import { useEffect } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { session, loading } = useAuth();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/login');
    }
  }, [session, loading, router]);

  const handleLogout = async () => {
    try {
      // Clear any local storage or cookies first
      if (typeof window !== 'undefined') {
        localStorage.removeItem('supabase.auth.token');
        document.cookie = 'supabase.auth.token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        // Also clear any other potential auth-related items
        localStorage.removeItem('sb-wmjayfqmfcgdgfefclhn-auth-token');
        document.cookie = 'sb-wmjayfqmfcgdgfefclhn-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      }
      
      // Try to sign out
      await supabase.auth.signOut();
      
      // Force a router refresh and navigation
      router.refresh();
      router.push('/login');
      
      // Force a page reload as a last resort
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Error logging out:', error);
      // Still try to redirect to login even if there's an error
      router.push('/login');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black dark:border-white"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      {/* Navigation */}
      <nav className="px-4 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-black dark:text-white font-light text-lg">
            Ryan Deniega
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">About</Link>
            <Link href="/work" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Work</Link>
            <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Projects</Link>
            <Link href="/posts" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Posts</Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Contact</Link>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button
              onClick={handleLogout}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
} 