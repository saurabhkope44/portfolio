import { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with user authentication, payment processing, and inventory management.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'Full Stack',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative project management tool with real-time updates and team collaboration features.',
    image: '/placeholder.svg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
    category: 'Full Stack',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description:
      'Interactive data visualization dashboard with customizable charts and export capabilities.',
    image: '/placeholder.svg',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Social Media API',
    description:
      'RESTful API for a social networking platform with authentication and media handling.',
    image: '/placeholder.svg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis'],
    category: 'Backend',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Portfolio Generator',
    description:
      'A tool that generates beautiful portfolio websites from simple configuration files.',
    image: '/placeholder.svg',
    technologies: ['TypeScript', 'Vite', 'Tailwind'],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'DevOps Pipeline',
    description:
      'Automated CI/CD pipeline with testing, building, and deployment to multiple environments.',
    image: '/placeholder.svg',
    technologies: ['Docker', 'GitHub Actions', 'AWS', 'Terraform'],
    category: 'DevOps',
    githubUrl: '#',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'DevOps'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My Work</p>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  'px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300',
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground glow-sm'
                    : 'glass glass-hover text-muted-foreground hover:text-foreground'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group rounded-xl glass overflow-hidden glass-hover"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Project image */}
                <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                    <Folder className="w-12 h-12 text-primary/50 group-hover:scale-110 transition-transform" />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <span className="text-primary font-mono text-xs mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs font-mono bg-secondary/50 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more button */}
          <div className="text-center mt-12">
            <Button variant="outline" className="glass glass-hover">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
