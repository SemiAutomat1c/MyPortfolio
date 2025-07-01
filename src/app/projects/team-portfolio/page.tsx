import Image from 'next/image';
import Link from 'next/link';
import { FaHtml5, FaCss3Alt, FaJs, FaFontAwesome } from 'react-icons/fa';

export default function TeamPortfolioPage() {
  const features = [
    {
      title: "Interactive UI",
      description: "Modern, responsive design with subtle animations and transitions for enhanced user experience."
    },
    {
      title: "Team Profiles",
      description: "Detailed information about each team member including skills, education, and projects."
    },
    {
      title: "Project Showcase",
      description: "Display of team projects with GitHub repository links and live demos."
    },
    {
      title: "Theme Toggle",
      description: "Dark/Light mode toggle for comfortable viewing in any environment."
    },
    {
      title: "Loading Animation",
      description: "Custom animation featuring University of Mindanao logo for better user engagement."
    }
  ];

  const teamMembers = [
    {
      name: "Ryan Christian Deniega",
      role: "Web Developer & UI Designer",
      contribution: "Led development and implemented UI/UX design"
    },
    {
      name: "Kyndel Roy Suarez",
      role: "Graphic Designer & Digital Artist",
      contribution: "Created visual assets and design direction"
    },
    {
      name: "Jayvien Mocallay",
      role: "Cybersecurity Specialist & Programmer",
      contribution: "Handled structure and logic implementation"
    },
    {
      name: "Nina Kristina Nillas",
      role: "Digital Content Creator & Media Specialist",
      contribution: "Managed content and media assets"
    }
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4 pt-24 pb-12">
      <h1 className="text-4xl font-bold mb-6">Team Portfolio Website</h1>
      
      {/* Project Overview */}
      <section className="mb-12">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A collaborative project developed for the CS15 Web Design & Development course at the University of Mindanao. 
          This responsive and interactive team portfolio website showcases our team's skills, projects, and journey together.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The project demonstrates our ability to work as a team while implementing modern web development practices and 
          creating an engaging user experience.
        </p>

        {/* Project Images */}
        <div className="space-y-6 mb-8">
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="relative w-full">
              <Image
                src="/images/teamport_img1.png"
                alt="Team Portfolio main interface"
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
                src="/images/teamport_img2.png"
                alt="Team Portfolio features showcase"
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
            href="https://cs15-group7.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Live Demo →
          </a>
          <a 
            href="https://github.com/SemiAutomat1c/proj"
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

      {/* Team Members */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300">{member.contribution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <FaHtml5 className="w-6 h-6 text-orange-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">HTML5</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Semantic markup
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <FaCss3Alt className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">CSS3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Modern animations
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <FaJs className="w-6 h-6 text-yellow-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">JavaScript</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Interactive features
              </p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3">
            <FaFontAwesome className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Font Awesome</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Icon library
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Course Project</h2>
        <p className="text-gray-600 dark:text-gray-300">
          This project was developed as part of the CS15 Web Design & Development course at the University of Mindanao. 
          It represents our team's ability to collaborate effectively while applying web development principles and creating 
          a professional portfolio website.
        </p>
      </section>
    </div>
  );
} 