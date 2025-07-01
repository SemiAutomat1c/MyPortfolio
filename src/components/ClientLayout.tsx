'use client';

import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { AuthProvider } from '@/lib/AuthContext';
import ThemeScript from '@/components/ThemeScript';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <AuthProvider>
        <ThemeScript />
        {!isAdminRoute && <Navbar />}
        <main>{children}</main>
      </AuthProvider>
    </ThemeProvider>
  );
} 