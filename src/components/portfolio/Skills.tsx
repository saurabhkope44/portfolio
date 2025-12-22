import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    name: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 82 },
      { name: 'Linux', level: 78 },
    ],
  },
  {
    name: 'Other',
    skills: [
      { name: 'REST APIs', level: 95 },
      { name: 'Agile/Scrum', level: 88 },
      { name: 'UI/UX Design', level: 70 },
      { name: 'Testing', level: 82 },
      { name: 'Performance', level: 85 },
    ],
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const currentCategory = skillCategories.find((c) => c.name === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  'px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300',
                  activeCategory === category.name
                    ? 'bg-primary text-primary-foreground glow-sm'
                    : 'glass glass-hover text-muted-foreground hover:text-foreground'
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory?.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-6 rounded-xl glass glass-hover"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-teal-400 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack badges */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'React',
                'TypeScript',
                'Node.js',
                'Python',
                'PostgreSQL',
                'Docker',
                'AWS',
                'Git',
                'Tailwind',
                'GraphQL',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg glass glass-hover text-sm font-mono text-muted-foreground hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
