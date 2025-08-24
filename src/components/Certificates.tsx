import { Award, Shield, Brain, Trophy, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certificates = () => {
  const certificates = [
    {
      icon: Shield,
      title: 'CompTIA Security+',
      issuer: 'CompTIA',
      category: 'Cybersecurity',
      description: 'Industry-standard certification covering network security, compliance, threats, and vulnerabilities.',
      color: 'text-red-400',
      bgColor: 'bg-red-400/20'
    },
    {
      icon: Shield,
      title: 'Google Cybersecurity Certificate',
      issuer: 'Google',
      category: 'Cybersecurity',
      description: 'Comprehensive program covering security frameworks, risk management, and incident response.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20'
    },
    {
      icon: Users,
      title: 'Elite Live SOC Module',
      issuer: 'Security Operations',
      category: 'SOC Operations',
      description: 'Advanced training in Security Operations Center procedures and real-time threat monitoring.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20'
    },
    {
      icon: Trophy,
      title: "Beginner's Journey in CTF",
      issuer: 'CTF Platform',
      category: 'Ethical Hacking',
      description: 'Foundational certification in Capture The Flag competitions and ethical hacking methodologies.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20'
    },
    {
      icon: Brain,
      title: 'AI For Everyone',
      issuer: 'Coursera/Stanford',
      category: 'Artificial Intelligence',
      description: 'Introduction to AI concepts, machine learning basics, and AI applications in cybersecurity.',
      color: 'text-green-400',
      bgColor: 'bg-green-400/20'
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cybersecurity and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="group p-6 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${cert.bgColor} group-hover:scale-110 transition-transform`}>
                  <cert.icon size={24} className={cert.color} />
                </div>
                <Badge 
                  variant="secondary"
                  className="bg-secondary/50 text-xs group-hover:bg-primary group-hover:text-background transition-colors"
                >
                  {cert.category}
                </Badge>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-sm text-primary font-medium mb-3">
                {cert.issuer}
              </p>
              
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                {cert.description}
              </p>
              
              {/* Certificate validation indicator */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-glow-pulse" />
                  <span>Verified Certificate</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional achievement note */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-card-gradient border-primary/30">
            <div className="flex items-center justify-center space-x-3">
              <Award className="text-primary" size={24} />
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">Always pursuing new certifications and skill development</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certificates;