import Button from './ui/button'

export default function Hero() {
  return (
    <section id="home" className="container">
      <div className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Adarsh</h1>
          <p className="hero-text-lg">
            System Engineer & Backend Developer building scalable, high-performance solutions.
          </p>
          <p>
            Currently at Twospoon Technologies, I architect microservices, design Flask/Django systems, 
            and automate infrastructure—handling 100K+ daily requests with 99.9% uptime.
          </p>

          <div className="hero-buttons">
            <Button variant="primary" href="#projects">View my work</Button>
            <Button variant="outline" href="#contact">Get in touch</Button>
          </div>

          <div className="hero-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="hero-card" aria-hidden>
          <div className="hero-avatar">AL</div>
          <div className="hero-card-name">Adarsh Liju Abraham</div>
          <div className="hero-card-title">System Engineer</div>
        </div>
      </div>
    </section>
  )
}
