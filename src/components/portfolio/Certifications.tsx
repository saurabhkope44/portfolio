import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2023',
    credentialUrl: '#',
  },
  {
    id: 2,
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: 'Sep 2023',
    credentialUrl: '#',
  },
  {
    id: 3,
    name: 'Meta Front-End Developer',
    issuer: 'Meta',
    date: 'Jun 2023',
    credentialUrl: '#',
  },
  {
    id: 4,
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB',
    date: 'Mar 2023',
    credentialUrl: '#',
  },
  {
    id: 5,
    name: 'Kubernetes Administrator (CKA)',
    issuer: 'CNCF',
    date: 'Jan 2023',
    credentialUrl: '#',
  },
  {
    id: 6,
    name: 'Scrum Master Certified',
    issuer: 'Scrum Alliance',
    date: 'Nov 2022',
    credentialUrl: '#',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Credentials</p>
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
          </div>

          {/* Certifications grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="group p-6 rounded-xl glass glass-hover"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-mono text-xs">
                        {cert.date}
                      </span>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
