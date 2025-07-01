'use client';

import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import AuthHandler from '@/components/AuthHandler';
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
      <AuthHandler />
      <ThemeScript />
      {!isAdminRoute && <Navbar />}
      <main>{children}</main>
    </ThemeProvider>
  );
} 