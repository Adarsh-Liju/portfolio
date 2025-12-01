export default function About() {
  return (
    <section id="about" className="container">
      <h2>About</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a System Engineer and Backend Developer passionate about building robust, scalable, and high-performance solutions. 
            My expertise spans computer science fundamentals, distributed systems, and automation.
          </p>
          <p>
            At <strong>Twospoon Technologies</strong> (Oct'24 - Present), I architect and develop microservices, design scalable Flask/Django systems, 
            and automate infrastructure. I've developed Flask-based APIs handling 100K+ daily requests, reduced deployment time by 40%, 
            and implemented SNMP-based monitoring systems maintaining 99.9% uptime.
          </p>
          <p>
            Previously at <strong>Caliper Business</strong> (May'24 - Oct'24), I engineered high-volume data processing pipelines, 
            analytics-driven APIs processing 1M+ records daily, and automation workflows—reducing manual processing time by 70% 
            and API response time by 60%.
          </p>
          <p>
            I hold a B.Tech in Computer Science from PES University (May'24) and have published research in Springer and IEEE 
            on SDN architectures and network optimization. I actively contribute to open-source and lead workshops on Linux, Git, and Golang.
          </p>
        </div>

        <div className="skills-card">
          <h3>Technical Skills</h3>
          <div className="skills-section">
            <div>
              <div className="skills-label">Languages</div>
              <div className="skills-items">JavaScript, Python, C, C++, PHP, Shell (Bash), MySQL, Golang</div>
            </div>
            <div>
              <div className="skills-label">Systems</div>
              <div className="skills-items">Linux, SQL, Docker, Kernel Programming</div>
            </div>
            <div>
              <div className="skills-label">Frameworks & Tools</div>
              <div className="skills-items">Django, ReactJS, Flask, Git, AWS, Pandas, SNMP, OpenMP, MPI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
