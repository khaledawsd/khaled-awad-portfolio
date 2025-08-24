import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Khaled Awad
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            Cybersecurity Student | Developer | CTF Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building secure applications and exploring the ever-evolving world of cybersecurity. 
            Currently pursuing my BSc in Cyber Security while developing cross-platform applications and competing in CTF challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent-gradient hover:shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/khaledawad', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub
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
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('skills')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-primary hover:text-accent transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;