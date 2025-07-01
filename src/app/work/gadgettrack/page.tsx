import Image from 'next/image';
import Link from 'next/link';

export default function GadgetTrack() {
  const features = [
    {
      title: "Inventory Management",
      description: "Track stock levels, set reorder points, and manage product variants with ease. Includes barcode scanning, bulk import/export, and category management."
    },
    {
      title: "Point of Sale",
      description: "Fast and intuitive checkout process with support for multiple payment methods including cash, credit cards, and mobile payments. Works online and offline."
    },
    {
      title: "Customer Management",
      description: "Build lasting relationships with customer profiles, purchase history, and loyalty programs. Send automated notifications and personalized offers."
    },
    {
      title: "Multi-device Access",
      description: "Access your store from any device with our responsive web app and native mobile applications."
    },
    {
      title: "Returns Processing",
      description: "Streamlined returns workflow with reason tracking, refund processing, and inventory management."
    }
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4 pt-24 pb-12">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold">GadgetTrack</h1>
        <div className="bg-yellow-500/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-600"></span>
          </span>
          Work in Progress
        </div>
      </div>
      
      {/* Project Overview */}
      <section className="mb-12">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          GadgetTrack is a comprehensive Point of Sale (POS) system specifically designed for local gadget retailers in Tagum City, Philippines. 
          Built to address the unique needs of small to medium-sized electronics stores in the area, it combines powerful inventory management, 
          customer tracking, and flexible payment options including installment plans.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The project aims to modernize how local gadget stores manage their operations, replacing traditional paper-based systems 
          with a digital solution that's both powerful and easy to use. It's tailored to match the common business practices and 
          requirements of electronics retailers in our local community.
        </p>

        {/* Project Images */}
        <div className="space-y-6 mb-8">
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="relative w-full">
              <Image
                src="/images/GadgetTrack_img.png"
                alt="GadgetTrack main interface"
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
                src="/images/gadgetTrack_image2.png"
                alt="GadgetTrack features showcase"
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
            href="https://gadgettrack.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Live Demo →
          </a>
          <a 
            href="https://github.com/SemiAutomat1c/POS"
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
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2">Inventory Management</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track gadget stocks, set alerts for low inventory, and manage product categories with ease.
              Optimized for electronics inventory with fields for IMEI numbers, warranties, and specifications.
            </p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2">Customer Management</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Maintain customer profiles, purchase history, and contact information. Perfect for building 
              lasting relationships with local customers.
            </p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2">Installment Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Manage flexible payment plans common in local retail, track due dates, and automate payment reminders.
              Designed to handle the popular installment payment system in the region.
            </p>
          </div>
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2">Sales Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Generate insights on best-selling items, peak sales periods, and customer preferences specific to the local market.
              Help store owners make data-driven decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <svg className="w-6 h-6 text-blue-500 mt-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.2 0H12.8V18.4H11.2V0ZM0 12.8H18.4V11.2H0V12.8ZM18.4 18.4H24V24H18.4V18.4Z" />
            </svg>
            <div>
              <h3 className="font-semibold mb-1">Next.js & TypeScript</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                For a fast, type-safe, and SEO-friendly application
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <svg className="w-6 h-6 text-green-500 mt-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.5 0h-19A2.5 2.5 0 000 2.5v19A2.5 2.5 0 002.5 24h19a2.5 2.5 0 002.5-2.5v-19A2.5 2.5 0 0021.5 0zM12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
            </svg>
            <div>
              <h3 className="font-semibold mb-1">Supabase</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Secure database and authentication system
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <svg className="w-6 h-6 text-purple-500 mt-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.63 16.563l-2.532-.923c1.037-.443 1.762-1.483 1.762-2.697 0-1.617-1.302-2.928-2.903-2.928s-2.903 1.311-2.903 2.928c0 1.214.725 2.254 1.762 2.697l-2.532.923c-1.586.577-2.645 2.13-2.645 3.871v.797c0 .276.224.5.5.5h11.636c.276 0 .5-.224.5-.5v-.797c0-1.741-1.059-3.294-2.645-3.871z" />
            </svg>
            <div>
              <h3 className="font-semibold mb-1">Redux Toolkit</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                State management for complex data flows
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <svg className="w-6 h-6 text-cyan-500 mt-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.91 1.345 0.982.98 2.124 2.117 4.59 2.117 2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.91-1.345-.981-.98-2.123-2.117-4.59-2.117zM7 12.036c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.91 1.345.982.98 2.124 2.117 4.59 2.117 2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.91-1.345-.981-.98-2.123-2.117-4.59-2.117z" />
            </svg>
            <div>
              <h3 className="font-semibold mb-1">Tailwind CSS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Modern and responsive design system
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <svg className="w-6 h-6 text-orange-500 mt-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <div>
              <h3 className="font-semibold mb-1">PWA</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Offline capabilities for reliable operation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progressive Web App */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Progressive Web App</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          GadgetTrack is built as a Progressive Web App (PWA), making it:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Installable on any device</li>
          <li>Functional offline - crucial for areas with unstable internet connections</li>
          <li>Fast loading with minimal data usage</li>
          <li>Always up-to-date with the latest features</li>
        </ul>
      </section>

      {/* Project Status */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project Status</h2>
        <p className="text-gray-600 dark:text-gray-300">
          GadgetTrack is currently in active development, with regular updates and new features being added based on feedback 
          from local store owners. The goal is to create a solution that perfectly fits the needs of our local gadget retail community.
        </p>
      </section>
    </div>
  );
} 