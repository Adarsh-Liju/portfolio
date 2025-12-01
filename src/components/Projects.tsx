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
    <section id="projects" className="container">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            <div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <p className="project-highlight">{p.highlight}</p>
            </div>
            
            <div className="project-tech">
              {p.tech.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="project-team">
              {p.team}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
