'use client';

import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Link from 'next/link';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiTypescript, SiVite } from 'react-icons/si';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';

export const fetchCache = 'force-no-store';

export default async function Home() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3); // Get only the 3 most recent posts

  // Sample work data
  const workItems = [
    {
      title: "GadgetTrack",
      image: "/images/GadgetTrack_img.png",
      description: "A modern Point of Sale system for gadget retailers with inventory management, customer tracking, and installment payment features. Built with Next.js, TypeScript, and Supabase.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Redux Toolkit",
        "Supabase",
        "PWA"
      ],
      demoLink: "https://gadgettrack.vercel.app/",
      githubLink: "https://github.com/SemiAutomat1c/POS",
      slug: "gadgettrack",
      status: "in-progress"
    }
  ];

  // Sample project data
  const projects = [
    {
      title: "BookHub",
      image: "/images/Bookhub_img1.png",
      description: "A comprehensive web-based digital book management system for organizing, reading, and tracking digital book collections with community features.",
      technologies: ["PHP", "MySQL", "JavaScript", "CSS3"],
      link: "/projects/bookhub",
      demoLink: "https://bookhub-clean.vercel.app/views/index.html",
      githubLink: "https://github.com/SemiAutomat1c/bookhub-clean",
      status: "maintenance"
    },
    {
      title: "GCash Receipt Verification System",
      image: "/images/gcashproj_img1.png",
      description: "A browser-based tool to verify the authenticity of GCash receipts by comparing them against actual GCash transaction history.",
      technologies: ["JavaScript", "HTML", "PDF.js", "Excel.js"],
      link: "/projects/gcash-verifier",
      demoLink: "https://g-cash-receipt-verifier.vercel.app/",
      githubLink: "https://github.com/SemiAutomat1c/GCashReceiptVerifier"
    }
  ];

  return (
    <>
      <Hero />
      
      {/* What I work with Section */}
      <Skills />
      
      {/* Experience Section */}
      <Experience />
      
      {/* My Work Section */}
      <section className="py-12">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">My work</h2>
          
          <div className="space-y-8">
            {workItems.map((item, index) => (
              <div key={index} className="relative group">
                {/* Work in Progress Badge */}
                {item.status === 'in-progress' && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-yellow-500/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-600 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-600"></span>
                      </span>
                      Work in Progress
                    </div>
                  </div>
                )}

                {/* Main project link */}
                <Link 
                  href={`/work/${item.slug}`}
                  className="block relative h-[400px] rounded-lg overflow-hidden"
                >
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                    quality={95}
                  />
                  
                  {/* Gradient overlay for text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                      {item.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.technologies?.map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-white/20 text-white px-2 py-0.5 rounded-full text-sm backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <span className="text-white text-sm group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      Learn more →
                    </span>
                  </div>
                </Link>

                {/* External links - positioned absolutely over the main link */}
                <div className="absolute top-4 right-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.demoLink && (
                    <Link 
                      href={item.demoLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-white hover:text-primary transition-colors drop-shadow-md bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                    >
                      Live Demo
                    </Link>
                  )}
                  {item.githubLink && (
                    <Link 
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-white hover:text-primary transition-colors drop-shadow-md bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* My Personal Projects Section */}
      <section className="py-12">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">My personal projects</h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="relative group">
                {/* Maintenance Badge */}
                {project.status === 'maintenance' && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-yellow-500/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Maintenance
                    </div>
                  </div>
                )}

                {/* Main project link */}
                <Link 
                  href={project.link}
                  className="block relative h-[300px] rounded-lg overflow-hidden"
                >
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                    quality={95}
                  />
                  
                  {/* Gradient overlay for text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies?.map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-white/20 text-white px-2 py-0.5 rounded-full text-sm backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <span className="text-white text-sm group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      Learn more →
                    </span>
                  </div>
                </Link>

                {/* External links - positioned absolutely over the main link */}
                <div className="absolute top-4 right-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demoLink && (
                    <Link 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-white hover:text-primary transition-colors drop-shadow-md bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                    >
                      Live Demo
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-white hover:text-primary transition-colors drop-shadow-md bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts Section */}
      <section className="py-12">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Latest blog posts</h2>
            <Link 
              href="/posts"
              className="text-primary hover:text-blue-600 transition-colors"
            >
              View all posts →
            </Link>
          </div>

          <div className="space-y-8">
            {latestPosts.map((post) => (
              <div key={post.slug} className="bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-lg p-8 shadow-sm">
                <div className="text-gray-600 dark:text-gray-400 mb-2">
                  {new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  <Link href={`/posts/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/posts/${post.slug}`} className="text-primary hover:underline">
                  Read more
                </Link>
              </div>
            ))}
          </div>

          {latestPosts.length === 0 && (
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
} 