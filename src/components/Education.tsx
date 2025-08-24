import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Education = () => {
  const education = {
    institution: 'Asia Pacific University',
    degree: 'Bachelor of Science in Cyber Security',
    duration: '2021 – 2024',
    location: 'Malaysia',
    highlights: [
      'Comprehensive study of cybersecurity principles and practices',
      'Hands-on experience with security tools and methodologies',
      'Focus on secure software development and ethical hacking',
      'Network security and digital forensics specialization'
    ]
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building a strong foundation in cybersecurity and technology
          </p>
        </div>

        <Card className="p-8 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated animate-fade-in-up">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <GraduationCap size={32} className="text-primary" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {education.degree}
                  </h3>
                  <h4 className="text-xl text-primary font-semibold mb-4">
                    {education.institution}
                  </h4>
                </div>
                
                <div className="flex flex-col lg:text-right space-y-2">
                  <div className="flex items-center lg:justify-end text-muted-foreground">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{education.duration}</span>
                  </div>
                  <div className="flex items-center lg:justify-end text-muted-foreground">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{education.location}</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold mb-4 text-foreground flex items-center">
                  <Award size={20} className="mr-2 text-primary" />
                  Academic Highlights
                </h5>
                <ul className="space-y-3">
                  {education.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;