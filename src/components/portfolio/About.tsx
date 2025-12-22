import { Code2, Coffee, Users, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: Code2, value: '5+', label: 'Years Experience' },
  { icon: Rocket, value: '30+', label: 'Projects Completed' },
  { icon: Users, value: '15+', label: 'Happy Clients' },
  { icon: Coffee, value: '∞', label: 'Cups of Coffee' },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar placeholder */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl glass glow overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                A passionate developer crafting digital experiences
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack developer with a passion for creating elegant
                  solutions to complex problems. With over 5 years of experience
                  in web development, I've worked on projects ranging from small
                  business websites to large-scale enterprise applications.
                </p>
                <p>
                  My journey in tech started with a curiosity about how things
                  work, which led me to explore programming. Today, I specialize
                  in building responsive, user-friendly applications using modern
                  technologies like React, Node.js, and TypeScript.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source
                  projects, writing technical articles, or exploring the latest
                  trends in web development.
                </p>
              </div>

              <Button variant="outline" className="glass glass-hover">
                Download Resume
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl glass glass-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
