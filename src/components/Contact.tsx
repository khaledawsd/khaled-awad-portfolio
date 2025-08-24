import { Mail, Phone, Github, Linkedin, ArrowUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+974 6647 3710',
      href: 'tel:+97466473710',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'khaledawsd0900@gmail.com',
      href: 'mailto:khaledawsd0900@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/khaledawad',
      href: 'https://github.com/khaledawad',
      color: 'text-purple-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/khaledawad',
      href: 'https://linkedin.com/in/khaledawad',
      color: 'text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities in cybersecurity, development, or collaboration on exciting projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card 
              key={index}
              className="group p-6 bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a 
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="flex items-center space-x-4 group-hover:scale-105 transition-transform"
              >
                <div className={`p-3 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors ${contact.color}`}>
                  <contact.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {contact.label}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mb-12">
          <Card className="inline-block p-8 bg-card-gradient border-primary/30">
            <h3 className="text-xl font-bold mb-4 text-foreground">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Whether you're looking for a cybersecurity enthusiast, a dedicated developer, 
              or someone passionate about building secure solutions, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent-gradient hover:shadow-glow transition-all duration-300 hover:scale-105"
                onClick={() => window.open('mailto:khaledawsd0900@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send an Email
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://linkedin.com/in/khaledawad', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 Khaled Awad — Built with React & Tailwind CSS | Dark Theme
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Cybersecurity Student | Developer | CTF Enthusiast
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin size={12} className="mr-1" />
                <span>Based in Qatar</span>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => window.open('https://github.com/khaledawad', '_blank')}
                  className="h-8 w-8 p-0 hover:bg-primary/20"
                >
                  <Github size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => window.open('https://linkedin.com/in/khaledawad', '_blank')}
                  className="h-8 w-8 p-0 hover:bg-primary/20"
                >
                  <Linkedin size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="sm"
        className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-primary hover:bg-primary/80 shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUp size={20} />
      </Button>
    </section>
  );
};

export default Contact;