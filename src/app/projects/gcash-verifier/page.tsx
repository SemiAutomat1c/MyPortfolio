import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function GCashVerifierPage() {
  const features = [
    {
      title: "Client-side Processing",
      description: "All verification happens in your browser. No data is sent to any server, ensuring complete privacy and security."
    },
    {
      title: "PDF Statement Import",
      description: "Automatically extract transaction data from GCash PDF statements with support for password-protected files."
    },
    {
      title: "Spreadsheet Support",
      description: "Import receipt submissions from Excel or CSV files with automatic column identification."
    },
    {
      title: "Detailed Verification",
      description: "Comprehensive checks for reference numbers, amounts, and dates to identify discrepancies."
    },
    {
      title: "Privacy & Security",
      description: "All processing happens locally, with no data transmission. Works offline after initial page load."
    }
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4 pt-24 pb-12">
      <h1 className="text-4xl font-bold mb-6">GCash Receipt Verification System</h1>
      
      {/* Project Overview */}
      <section className="mb-12">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A browser-based tool that revolutionizes how businesses verify GCash receipts by automating the comparison process against actual GCash transaction history.
          Built with a strong focus on privacy and security, all data processing happens client-side.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The project aims to streamline the receipt verification process, making it easier for businesses to validate GCash transactions
          while maintaining the confidentiality of sensitive financial data.
        </p>

        {/* Project Images */}
        <div className="space-y-6 mb-8">
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="relative w-full">
              <Image
                src="/images/gcashproj_img1.png"
                alt="GCash Receipt Verifier interface"
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
            href="https://g-cash-receipt-verifier.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Live Demo →
          </a>
          <a 
            href="https://github.com/SemiAutomat1c/GCashReceiptVerifier"
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
            <svg className="w-6 h-6 text-yellow-500 mt-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
            </svg>
            <div>
              <h3 className="font-semibold mb-1">JavaScript</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Core functionality and data processing
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <svg className="w-6 h-6 text-orange-500 mt-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
            </svg>
            <div>
              <h3 className="font-semibold mb-1">HTML</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Clean and intuitive interface
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Privacy & Security</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          The system is designed with privacy and security as top priorities:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>All processing happens in the browser - no server uploads</li>
          <li>Works offline after initial page load</li>
          <li>PDF passwords are only used locally</li>
          <li>No data storage or transmission</li>
          <li>Complete transaction privacy</li>
        </ul>
      </section>
    </div>
  );
} 