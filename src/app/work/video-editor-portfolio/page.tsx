import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer } from 'react-icons/si';

export default function VideoEditorPortfolioPage() {
  const features = [
    {
      title: "Modern Design",
      description: "Clean, professional interface with dark/light theme support and smooth animations powered by Framer Motion."
    },
    {
      title: "Responsive Layout",
      description: "Fully responsive design that looks great on all devices, from mobile phones to large desktop screens."
    },
    {
      title: "Performance Optimized",
      description: "Built with Next.js 14 for optimal performance, SEO, and user experience."
    },
    {
      title: "Interactive Elements",
      description: "Engaging animations and transitions that enhance the user experience without compromising performance."
    },
    {
      title: "Contact Integration",
      description: "Functional contact form with Nodemailer integration for direct client communication."
    }
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4 pt-24 pb-12">
      <h1 className="text-4xl font-bold mb-6">Video Editor Portfolio Website</h1>
      
      {/* Project Overview */}
      <section className="mb-12">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A commissioned project for a fellow classmate who works as a short-form video editor specializing in TikTok, Reels, and YouTube Shorts content.
          This modern portfolio website showcases their video editing services and impressive track record of over 50M+ total views across platforms.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The project was built with a focus on visual appeal and smooth user experience, incorporating modern web technologies and best practices.
          It serves as a professional platform for the client to showcase their work and attract potential customers in the growing short-form video market.
        </p>

        {/* Project Images */}
        <div className="space-y-6 mb-8">
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="relative w-full">
              <Image
                src="/images/VideoCommision_img1.png"
                alt="Video Editor Portfolio Hero Section"
                width={1920}
                height={1080}
                className="hover:scale-105 transition-transform duration-300 w-full h-auto"
                quality={95}
              />
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="relative w-full">
              <Image
                src="/images/VideoCommision_img2.png"
                alt="Video Editor Portfolio Services Section"
                width={1920}
                height={1080}
                className="hover:scale-105 transition-transform duration-300 w-full h-auto"
                quality={95}
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex gap-4">
          <a 
            href="https://jayromepillo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Live Demo →
          </a>
          <a 
            href="https://github.com/SemiAutomat1c/VidEditPortfolioCommision"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View Source →
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <SiNextdotjs className="w-6 h-6 text-black dark:text-white mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Next.js 14</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Modern React framework
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <SiTypescript className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">TypeScript</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Type-safe development
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <SiTailwindcss className="w-6 h-6 text-teal-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Tailwind CSS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Utility-first styling
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <SiFramer className="w-6 h-6 text-purple-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Framer Motion</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Smooth animations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Development Process</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This commissioned project was developed for a classmate who needed a professional platform to showcase their video editing services. The development process focused on:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Understanding the client's needs and target audience</li>
          <li>Creating a design that reflects their brand and style</li>
          <li>Implementing modern web technologies for optimal performance</li>
          <li>Ensuring responsive design and cross-browser compatibility</li>
          <li>Integrating contact functionality for potential clients</li>
        </ul>
      </section>
    </div>
  );
} 