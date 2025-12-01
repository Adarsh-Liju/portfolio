const projects = [
  {
    title: 'Project Turtle',
    description: 'Streamlined shell script for installing essential tools on Linux systems.',
    highlight: 'Part of Hacktoberfest • Used to bootstrap tools on servers and workstations',
    team: 'Team of 2',
    tech: ['Shell Scripting', 'Linux', 'Bash']
  },
  {
    title: 'Yet Another Markdown Converter',
    description: 'CLI tool for converting Markdown to HTML with customizable theming.',
    highlight: 'Flexible and automated solution for document conversion',
    team: 'Solo project',
    tech: ['CLI', 'Markdown', 'HTML']
  },
  {
    title: 'DoctorPres',
    description: 'Digital prescription system replacing handwritten prescriptions.',
    highlight: 'Database triggers for validation • Stored procedures for complex queries',
    team: 'Solo project',
    tech: ['Streamlit', 'MySQL', 'Python']
  },
  {
    title: 'Secure Dapps Platform',
    description: 'Blockchain-integrated platform for decentralized applications.',
    highlight: 'ONOS controller cluster eliminates single point of failure',
    team: 'Team of 4',
    tech: ['Blockchain', 'SDN', 'ONOS']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6">
      <h2>Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="border border-border rounded-xl bg-card p-6 hover-lift">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">{p.description}</p>
              <p className="text-xs text-muted-foreground italic">{p.highlight}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {p.tech.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="text-xs text-muted-foreground">
              {p.team}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
