import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My Work | Ryan Deniega',
  description: 'Showcase of my projects and learning journey in web development',
};

export default function WorkPage() {
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
    },
    {
      title: "Video Editor Portfolio",
      image: "/images/VideoCommision_img1.png",
      description: "A modern portfolio website commissioned by a classmate who specializes in short-form video editing. Features dark/light theme, smooth animations, and a fully functional contact form.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "React",
        "Nodemailer"
      ],
      demoLink: "https://jayromepillo.vercel.app/",
      githubLink: "https://github.com/SemiAutomat1c/VidEditPortfolioCommision",
      slug: "video-editor-portfolio",
      status: "completed"
    }
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">My Work</h1>
      
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
  );
} 