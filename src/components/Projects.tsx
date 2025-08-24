import { Github, ExternalLink, Shield, Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      icon: Shield,
      title: 'Secure Web-Based Car Rental System',
      description: 'A comprehensive car rental platform built with Flask, featuring robust security measures including SQL injection protection, XSS prevention, and secure password hashing. Implements secure user authentication, rental processing, and administrative controls.',
      technologies: ['Flask', 'Python', 'SQL', 'Security', 'Web Development'],
      features: [
        'SQL Injection & XSS Protection',
        'Secure Password Hashing',
        'User Authentication System',
        'Rental Management Dashboard',
        'Admin Control Panel'
      ],
      githubLink: 'https://github.com/khaledawsd/Car-Rental-App',
      demoLink: 'https://github.com/khaledawsd/Car-Rental-App'
    },
    {
      icon: Lock,
      title: 'Image Encryption Application',
      description: 'A sophisticated cryptographic application focused on image security, exploring various encryption algorithms and their implementation. Features multiple encryption methods and provides insights into cryptographic principles and their practical applications.',
      technologies: ['Python', 'Cryptography', 'Image Processing', 'Security', 'Algorithms'],
      features: [
        'Multiple Encryption Algorithms',
        'Image Processing Pipeline',
        'Cryptographic Analysis Tools',
        'Security Benchmarking',
        'Algorithm Comparison'
      ],
      githubLink: 'https://github.com/khaledawsd/IES-by-Tkinter',
      demoLink: 'https://github.com/khaledawsd/IES-by-Tkinter'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing practical applications of cybersecurity principles and secure development practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <project.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold ml-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-background transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-background transition-all"
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 bg-accent-gradient hover:shadow-glow transition-all"
                  onClick={() => window.open(project.demoLink, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;