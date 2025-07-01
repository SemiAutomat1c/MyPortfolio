import Image from 'next/image';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

export default function PaluwaganPage() {
  const features = [
    {
      title: "Member Management",
      description: "Create member profiles, verify documents, and monitor member activity all in one place. Track contributions and maintain detailed member records."
    },
    {
      title: "Secure Payments",
      description: "Support for GCash, Maya, and bank transfers with automated reconciliation and verification. Process payments through multiple secure gateways."
    },
    {
      title: "Group Management",
      description: "Create and manage multiple Paluwagan groups, set payment schedules, assign members, and track group progress with detailed reporting."
    },
    {
      title: "Document Verification",
      description: "Built-in system for verifying member documents and maintaining compliance with group policies."
    },
    {
      title: "Payment Tracking",
      description: "Comprehensive system for tracking all member contributions, payments, and disbursements with automated reconciliation."
    }
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4 pt-24 pb-12">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold">Paluwagan Management System</h1>
        <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-900 dark:text-yellow-200">
          Work in Progress
        </span>
      </div>
      
      {/* Project Overview */}
      <section className="mb-12">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A digital platform for managing informal savings groups, handling payments, and tracking member contributions.
          This system modernizes the traditional Filipino "Paluwagan" practice, making it more efficient and secure.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Built with modern web technologies, the platform offers a comprehensive solution for managing savings groups,
          from member registration to payment processing and group management.
        </p>

        {/* Project Images */}
        <div className="space-y-6 mb-8">
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="relative w-full">
              <Image
                src="/images/paluwagan.png"
                alt="Paluwagan Management System interface"
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
            href="https://paluwagan-system.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Live Demo →
          </a>
          <a 
            href="https://github.com/SemiAutomat1c/paluwagan-system"
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

      {/* Demo Access */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Demo Access</h2>
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You can try out the system using these demo credentials:
          </p>
          <div className="space-y-2 font-mono text-sm">
            <p><span className="text-gray-500">Email:</span> admin@example.com</p>
            <p><span className="text-gray-500">Password:</span> password123</p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <SiNextdotjs className="w-6 h-6 text-black dark:text-white mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Next.js</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Framework
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <SiTypescript className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">TypeScript</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Language
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <SiTailwindcss className="w-6 h-6 text-teal-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Tailwind CSS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Styling
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <FaReact className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">shadcn/ui</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                UI Components
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Implementation Details</h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            The system is built with a focus on security and usability, implementing:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Custom authentication system with secure cookie-based sessions</li>
            <li>Real-time payment tracking and verification</li>
            <li>Automated reconciliation for multiple payment gateways</li>
            <li>Responsive design for mobile and desktop access</li>
            <li>Role-based access control for different user types</li>
            <li>Detailed audit trails for all transactions</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 