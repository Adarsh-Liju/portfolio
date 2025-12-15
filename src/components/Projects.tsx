const projects = [
  {
    title: 'Project Turtle',
    description: 'Developed a shell script for streamlined installation of essential tools on Linux systems. Implemented error handling and rigorous compatibility testing across multiple distributions.',
    highlight: 'Part of Hacktoberfest • Used to bootstrap tools on servers and workstations',
    team: 'Team of 2',
    tech: ['Shell Scripting', 'Linux', 'Bash']
  },
  {
    title: 'Yet Another Markdown Converter',
    description: 'Designed a Command Line Interface(CLI) tool to convert Markdown files to plain HTML. Offers additional theming and styling options for customizable appearance.',
    highlight: 'Flexible and automated solution for document conversion',
    team: 'Solo project',
    tech: ['CLI', 'Markdown', 'HTML']
  },
  {
    title: 'DoctorPres',
    description: 'Developed a Doctor Prescription System to replace handwritten prescriptions with a digital solution. Utilizes Streamlit for interface and MySQL for data storage.',
    highlight: 'Database triggers for validation • Stored procedures for complex queries',
    team: 'Solo project',
    tech: ['Streamlit', 'MySQL', 'Python']
  },
  {
    title: 'Secure Dapps Platform',
    description: 'Created a secure platform for Dapps by integrating a blockchain, establishing a decentralized, tamper-resistant system enhancing network security.',
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
