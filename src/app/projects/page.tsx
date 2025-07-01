import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects | Ryan Deniega',
  description: 'Personal projects I have created and contributed to',
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "BookHub",
      image: "/images/Bookhub_img1.png",
      description: "A comprehensive web-based digital book management system for organizing, reading, and tracking digital book collections with community features.",
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "CSS3",
        "PDF.js"
      ],
      demoLink: "https://bookhub-clean.vercel.app/views/index.html",
      githubLink: "https://github.com/SemiAutomat1c/bookhub-clean",
      slug: "bookhub",
      status: "maintenance"
    },
    {
      title: "GCash Receipt Verification System",
      image: "/images/gcashproj_img1.png",
      description: "A browser-based tool to verify the authenticity of GCash receipts by comparing them against actual GCash transaction history.",
      technologies: [
        "JavaScript",
        "HTML",
        "PDF.js",
        "Excel.js"
      ],
      demoLink: "https://g-cash-receipt-verifier.vercel.app/",
      githubLink: "https://github.com/SemiAutomat1c/GCashReceiptVerifier",
      slug: "gcash-verifier"
    },
    {
      title: "Team Portfolio Website",
      image: "/images/teamport_img1.png",
      description: "A responsive and interactive team portfolio website for the CS15 Web Design & Development course at University of Mindanao, featuring team member profiles, project showcases, and interactive UI elements.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Font Awesome"
      ],
      demoLink: "https://cs15-group7.vercel.app/",
      githubLink: "https://github.com/SemiAutomat1c/proj",
      slug: "team-portfolio"
    },
    {
      title: "Paluwagan Management System",
      image: "/images/paluwagan.png",
      description: "A digital platform for managing informal savings groups, handling payments, and tracking member contributions.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui"
      ],
      demoLink: "https://paluwagan-system.vercel.app/",
      githubLink: "https://github.com/SemiAutomat1c/paluwagan-system",
      slug: "paluwagan",
      status: "in-progress"
    },
    {
      title: "Text-to-Image Converter",
      image: "/images/txt2img.png",
      description: "A web-based tool that converts text or code into properly formatted images, specifically designed for creating cheat sheets and answer keys. The tool automatically arranges the content on A4 pages for easy printing and cutting.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "jsPDF"
      ],
      demoLink: "https://text-to-image-cheatsheet.vercel.app/",
      githubLink: "https://github.com/SemiAutomat1c/text-to-image-cheatsheet",
      slug: "text-to-image"
    }
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Personal Projects</h1>
      
      <div className="space-y-8">
        {projects.map((item, index) => (
          <div key={index} className="relative group">
            {/* Maintenance Badge */}
            {item.status === 'maintenance' && (
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-yellow-500/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Maintenance
                </div>
              </div>
            )}
            
            {/* Work in Progress Badge */}
            {item.status === 'in-progress' && (
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-yellow-500/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m-8-8h16" />
                  </svg>
                  Work in Progress
                </div>
              </div>
            )}
            
            {/* Main project link */}
            <Link 
              href={`/projects/${item.slug}`}
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
  );
} 