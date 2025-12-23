import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

const roles = [
  'Full-Stack Developer',
  'Open Source Contributor',
  'Problem Solver',
  'Tech Enthusiast',
];

export function Hero() {
  const { displayText } = useTypingAnimation({
    texts: roles,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2500,
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up opacity-0">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up opacity-0 animation-delay-100">
            <span className="text-foreground">Saurabh </span>
            <span className="text-gradient">Kope</span>
          </h1>

          {/* Typing animation */}
          <div className="h-12 md:h-14 flex items-center justify-center mb-8 animate-fade-up opacity-0 animation-delay-200">
            <span className="font-mono text-lg md:text-2xl text-muted-foreground">
              {displayText}
            </span>
            <span className="w-0.5 h-6 md:h-8 bg-primary ml-1 animate-typing-cursor" />
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 animation-delay-300">
            I build exceptional digital experiences that combine clean code with
            intuitive design. Passionate about creating solutions that make a
            difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up opacity-0 animation-delay-400">
            <Button
              size="lg"
              className="glow-sm hover:glow transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass glass-hover"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-fade-up opacity-0 animation-delay-500">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass glass-hover hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass glass-hover hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:your@email.com"
              className="p-3 rounded-full glass glass-hover hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up opacity-0 animation-delay-600">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
