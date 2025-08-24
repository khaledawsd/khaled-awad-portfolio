import { Code, Shield, Network, Users, Puzzle, Terminal } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'C++', 'Dart'],
      color: 'text-blue-400'
    },
    {
      icon: Terminal,
      title: 'Operating Systems',
      skills: ['Linux', 'Windows', 'Command Line'],
      color: 'text-green-400'
    },
    {
      icon: Network,
      title: 'Networking',
      skills: ['Network Security', 'Protocols', 'Analysis'],
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Security Development',
      skills: ['Secure Coding', 'Vulnerability Assessment', 'Encryption'],
      color: 'text-red-400'
    },
    {
      icon: Puzzle,
      title: 'CTF & Competitions',
      skills: ['Problem Solving', 'Reverse Engineering', 'Cryptography'],
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Team Collaboration', 'Communication', 'Leadership'],
      color: 'text-cyan-400'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for cybersecurity and development challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="group p-6 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors ${skill.color}`}>
                  <skill.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold ml-4 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {skill.skills.map((item, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;