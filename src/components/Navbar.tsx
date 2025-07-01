'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'My work', href: '/work' },
    { name: 'Projects', href: '/projects' },
    { name: 'Posts', href: '/posts' },
    { name: 'Contact Me', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm py-5 dark:bg-dark'
          : 'bg-white py-8 dark:bg-dark'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Left side - Your Name */}
        <Link href="/" className="text-2xl font-bold text-dark dark:text-white">
          Ryan Deniega
        </Link>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-lg text-dark hover:text-primary transition-colors dark:text-white dark:hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side - Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-xl text-dark hover:text-primary transition-colors dark:text-white dark:hover:text-primary"
          aria-label="Toggle theme"
        >
          {mounted && (theme === 'dark' ? <FaSun /> : <FaMoon />)}
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-2xl text-dark dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 dark:bg-dark">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium text-dark hover:text-primary transition-colors dark:text-white dark:hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 