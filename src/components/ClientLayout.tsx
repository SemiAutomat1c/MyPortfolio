'use client';

import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { AuthProvider } from '@/lib/AuthContext';
import ThemeScript from '@/components/ThemeScript';
import ScrollToTop from '@/components/ScrollToTop';
import AnimatedBackground from '@/components/AnimatedBackground';
import AnimatedCursor from '@/components/AnimatedCursor';

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
        <AnimatedBackground />
        <AnimatedCursor />
        {!isAdminRoute && <Navbar />}
        <main>{children}</main>
        <ScrollToTop />
      </AuthProvider>
    </ThemeProvider>
  );
} 