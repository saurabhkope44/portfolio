import { useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    organization: 'Tech Company Inc.',
    period: '2022 - Present',
    description:
      'Leading development of scalable web applications. Mentoring junior developers and implementing best practices for code quality and performance.',
    type: 'work',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    organization: 'Digital Agency',
    period: '2020 - 2022',
    description:
      'Built custom web solutions for clients across various industries. Worked with React, Node.js, and cloud services.',
    type: 'work',
  },
  {
    id: 3,
    title: 'Master of Computer Science',
    organization: 'University of Technology',
    period: '2018 - 2020',
    description:
      'Specialized in Software Engineering and Machine Learning. Graduated with honors.',
    type: 'education',
  },
  {
    id: 4,
    title: 'Junior Developer',
    organization: 'Startup Co.',
    period: '2018 - 2020',
    description:
      'Started my professional journey building MVPs and learning full-stack development in a fast-paced environment.',
    type: 'work',
  },
  {
    id: 5,
    title: 'Bachelor of Science in CS',
    organization: 'State University',
    period: '2014 - 2018',
    description:
      'Foundation in computer science, algorithms, and data structures. Active member of the coding club.',
    type: 'education',
  },
];

export function Experience() {
  const [filter, setFilter] = useState<'all' | 'work' | 'education'>('all');

  const filteredData =
    filter === 'all'
      ? timelineData
      : timelineData.filter((item) => item.type === filter);

  return (
    <section id="experience" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Experience & Education
            </h2>
          </div>

          {/* Filter buttons */}
          <div className="flex justify-center gap-3 mb-12">
            {[
              { key: 'all', label: 'All' },
              { key: 'work', label: 'Experience' },
              { key: 'education', label: 'Education' },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setFilter(item.key as 'all' | 'work' | 'education')}
                className={cn(
                  'px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300',
                  filter === item.key
                    ? 'bg-primary text-primary-foreground glow-sm'
                    : 'glass glass-hover text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {/* Timeline items */}
            <div className="space-y-8">
              {filteredData.map((item, index) => (
                <div
                  key={item.id}
                  className={cn(
                    'relative flex items-start gap-6 md:gap-0',
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  )}
                >
                  {/* Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center',
                        item.type === 'work'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-foreground border-2 border-primary'
                      )}
                    >
                      {item.type === 'work' ? (
                        <Briefcase className="w-4 h-4" />
                      ) : (
                        <GraduationCap className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={cn(
                      'ml-16 md:ml-0 md:w-1/2 md:px-8',
                      index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                    )}
                  >
                    <div className="p-6 rounded-xl glass glass-hover">
                      <span className="text-primary font-mono text-xs mb-1 block">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {item.organization}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
