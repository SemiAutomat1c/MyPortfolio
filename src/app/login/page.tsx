'use client';

import { useState, useEffect, Suspense } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get error message from URL if it exists
    const errorMsg = searchParams.get('error');
    if (errorMsg) {
      setError(errorMsg);
    }
  }, [searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data?.session) {
        // Refresh the page to ensure middleware picks up the new session
        router.refresh();
        // Then redirect to admin
        router.push('/admin/posts');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-12">
        <div>
          <h2 className="text-3xl font-light text-black dark:text-white">
            Sign in
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Access the admin dashboard
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleLogin}>
          <div className="space-y-6">
            <div>
              <label htmlFor="email-address" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border-0 border-b border-gray-200 dark:border-gray-800 focus:border-gray-900 dark:focus:border-gray-100 focus:ring-0 bg-transparent text-black dark:text-white pb-2"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full border-0 border-b border-gray-200 dark:border-gray-800 focus:border-gray-900 dark:focus:border-gray-100 focus:ring-0 bg-transparent text-black dark:text-white pb-2"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && (
            <div className="border border-red-200 dark:border-red-800 p-4 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">
                {error}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full text-center py-3 border border-gray-200 dark:border-gray-800 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
} 