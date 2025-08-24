import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experience = {
    company: 'ALVA Productions',
    position: 'Applications Developer Intern',
    duration: 'Aug 2023 – Nov 2023',
    location: 'Remote',
    achievements: [
      'Built cross-platform mobile applications using Flutter framework',
      'Gained extensive experience in Dart programming language and modern UI/UX principles',
      'Delivered secure and optimized features focusing on performance and user experience',
      'Collaborated with senior developers to implement best practices in mobile development',
      'Participated in code reviews and agile development processes'
    ],
    technologies: ['Flutter', 'Dart', 'Mobile Development', 'UI/UX', 'Agile']
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building expertise through hands-on development experience
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
          
          <Card className="relative pl-20 p-8 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated animate-fade-in-up">
            {/* Timeline dot */}
            <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow" />
            
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {experience.position}
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-4">
                  {experience.company}
                </h4>
              </div>
              
              <div className="flex flex-col lg:text-right space-y-2">
                <div className="flex items-center lg:justify-end text-muted-foreground">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{experience.duration}</span>
                </div>
                <div className="flex items-center lg:justify-end text-muted-foreground">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{experience.location}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-4 text-foreground">Key Achievements:</h5>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-3 text-foreground">Technologies Used:</h5>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-secondary hover:bg-primary hover:text-background transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;