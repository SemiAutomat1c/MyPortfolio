import Image from 'next/image';
import Link from 'next/link';
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

export default function TextToImagePage() {
  const features = [
    {
      title: "Multiple Modes",
      description: "Switch between Code Mode and Text Mode for different formatting needs. Includes Compact and Ultra Compact options for space efficiency."
    },
    {
      title: "A4 Page Layout",
      description: "Automatically arranges content on A4 pages (210mm × 297mm) with proper cutting guides and image sizing (8.5cm × 5.5cm)."
    },
    {
      title: "Customizable Settings",
      description: "Adjust font size (8px-16px), scale factor (1x-4x), toggle anti-aliasing, and high contrast mode for perfect output."
    },
    {
      title: "Export Options",
      description: "Download as individual PNG images or combined PDF. Preview feature available before downloading."
    },
    {
      title: "Visual Aids",
      description: "Includes page numbers, image numbers, cutting guidelines, and corner marks for easy printing and cutting."
    }
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4 pt-24 pb-12">
      <h1 className="text-4xl font-bold mb-6">Text-to-Image Converter</h1>
      
      {/* Project Overview */}
      <section className="mb-12">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A web-based tool that converts text or code into properly formatted images, specifically designed for creating 
          cheat sheets and answer keys. The tool automatically arranges the content on A4 pages for easy printing and cutting.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          This project aims to simplify the process of creating printable reference materials by automating the layout 
          and formatting process while maintaining readability and professional appearance.
        </p>

        {/* Project Images */}
        <div className="space-y-6 mb-8">
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="relative w-full">
              <Image
                src="/images/txt2img.png"
                alt="Text-to-Image Converter interface"
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
            href="https://text-to-image-cheatsheet.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Live Demo →
          </a>
          <a 
            href="https://github.com/SemiAutomat1c/text-to-image-cheatsheet"
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

      {/* Usage Guide */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <div className="flex items-start gap-3">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">1</span>
            <p>Select mode (Code or Text) based on your content type</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">2</span>
            <p>Choose compression settings (Normal, Compact, or Ultra Compact)</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">3</span>
            <p>Adjust quality settings like font size and scale factor if needed</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">4</span>
            <p>Enter or paste your text/code into the input area</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">5</span>
            <p>Preview the result and make any necessary adjustments</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">6</span>
            <p>Download as individual PNG images or combined PDF</p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <FaJs className="w-6 h-6 text-yellow-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">JavaScript</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Core functionality
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <FaHtml5 className="w-6 h-6 text-orange-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">HTML5</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Structure & Canvas
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <FaCss3Alt className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">CSS3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Styling & Layout
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <SiJavascript className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">jsPDF</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                PDF Generation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browser Support */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Browser Support</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          The tool works in all modern browsers that support:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Canvas API</li>
          <li>ES6+ JavaScript</li>
          <li>CSS Grid/Flexbox</li>
          <li>File Download API</li>
        </ul>
      </section>
    </div>
  );
} 