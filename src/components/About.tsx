// (no runtime import needed - using JSX transform)

export default function About() {
  return (
    <section id="about" className="max-w-[1100px] mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">About me</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2 items-start">
        <div className="text-white/90 space-y-4">
          <p>
            Hi, I'm Adarsh Liju Abraham—a backend engineer and systems developer passionate about building robust, scalable, and high-performance solutions. My expertise spans computer science fundamentals, distributed systems, and automation.
          </p>
          <p>
            At Twospoon Technologies, I architect and develop microservices, design scalable Flask/Django systems, and automate infrastructure. My work includes SNMP-based monitoring, backend performance optimization, and secure, production-grade deployments. I focus on creating systems that are fast, stable, observable, and maintainable.
          </p>
          <p>
            Previously at Caliper Business, I engineered high-volume data processing pipelines, analytics-driven APIs, and automation workflows—reducing manual effort and boosting performance for multiple clients.
          </p>
          <p>
            My academic journey at PES University deepened my skills in Linux, system programming, distributed systems, and RISC-V research. I've published research in Springer and IEEE on SDN architectures, network optimization, and disaster-response systems. I actively contribute to open-source, lead workshops on Linux, Git, and Golang, and enjoy designing tools and automation workflows.
          </p>
          <p>
            I thrive at the intersection of systems engineering, backend development, and DevOps—solving complex technical challenges and driving reliability, scalability, and efficiency. I enjoy mentoring, exploring new technologies, and continuously improving the systems I build.
          </p>
        </div>

        <ul className="space-y-2 text-sm text-white/70" aria-label="Skills">
          <li>React & TypeScript</li>
          <li>Responsive & Accessible UI</li>
          <li>Testing & Tooling</li>
          <li>Performance optimizations</li>
        </ul>
      </div>
    </section>
  )
}
